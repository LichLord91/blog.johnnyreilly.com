---
slug: tfs-2012-meet-powershell-karma-and-buildnumber
title: 'TFS 2012 meet PowerShell, Karma and BuildNumber'
authors: johnnyreilly
tags: [TFS]
hide_table_of_contents: false
---

To my lasting regret, TFS 2012 has no direct support for PowerShell. Such a shame as PowerShell scripts can do a lot of heavy lifting in a build process. Well, here we're going to brute force TFS 2012 into running PowerShell scripts. And along the way we'll also get Karma test results publishing into TFS 2012 as an example usage. Nice huh? Let's go!

<!--truncate-->

## PowerShell via `csproj`

It's time to hack the `csproj` (or whatever project file you have) again. We're going to add an `AfterBuild` target to the end of the file. This target will be triggered after the build completes (as the name suggests):

```xml
<Target Name="AfterBuild">
    <Message Importance="High" Text="AfterBuild: PublishUrl = $(PublishUrl), BuildUri = $(BuildUri), Configuration = $(Configuration), ProjectDir = $(ProjectDir), TargetDir = $(TargetDir), TargetFileName = $(TargetFileName), BuildNumber = $(BuildNumber), BuildDefinitionName = $(BuildDefinitionName)" />
    <Exec Command="powershell.exe -NonInteractive -ExecutionPolicy RemoteSigned "& '$(ProjectDir)AfterBuild.ps1' '$(Configuration)' '$(ProjectDir)' '$(TargetDir)' '$(PublishUrl)' '$(BuildNumber)' '$(BuildDefinitionName)'"" />
  </Target>
```

There's 2 things happening in this target:

1. A message is printed out during compilation which contains details of the various compile time variables. This is nothing more than a `console.log` statement really; it's useful for debugging and so I keep it around. You'll notice one of them is called `$(BuildNumber)`; more on that later.
2. A command is executed; PowerShell! This invokes PowerShell with the `-NonInteractive` and `-ExecutionPolicy RemoteSigned` flags. It passes a script to be executed called `AfterBuild.ps1` that lives in the root of the project directory. To that script a number of parameters are supplied; compile time variables that we may use in the script.

## Where's my `BuildNumber` and `BuildDefinitionName`?

So you've checked in your changes and kicked off a build on the server. You're picking over the log messages and you're thinking: "Where's my `BuildNumber`?". Well, TFS 2012 does not have that set as a variable at compile time by default. This stumped me for a while but thankfully I wasn't the only person wondering... As ever, [Stack Overflow had the answer](http://stackoverflow.com/a/7330453/761388). So, deep breath, it's time to hack the TFS build template file.

Checkout the `DefaultTemplate.11.1.xaml` file from TFS and open it in your text editor of choice. It's _find and replace_ time! (There are probably 2 instances that need replacement.) Perform a _find_ for the below

```js
[String.Format(&quot;/p:SkipInvalidConfigurations=true {0}&quot;, MSBuildArguments)]
```

And _replace_ it with this:

```js
[
  String.Format(
    '/p:SkipInvalidConfigurations=true /p:BuildNumber={1} /p:BuildDefinitionName={2} {0}',
    MSBuildArguments,
    BuildDetail.BuildNumber,
    BuildDetail.BuildDefinition.Name
  ),
];
```

Pretty long line eh? Let's try breaking that up to make it more readable: (but remember in the XAML it needs to be a one liner)

```js
[String.Format("/p:SkipInvalidConfigurations=true
    /p:BuildNumber={1}
    /p:BuildDefinitionName={2} {0}", MSBuildArguments, BuildDetail.BuildNumber, BuildDetail.BuildDefinition.Name)]
```

We're just adding 2 extra parameters of `BuildNumber` and `BuildDefinitionName` to the invocation of MSBuild. Once we've checked this back in, `BuildNumber` and `BuildDefinitionName` will be available on future builds. Yay! _Important! You must have a build name that does not feature spaces; probably there's a way to pass spaces here but I'm not sure what it is._

## `AfterBuild.ps1`

You can use your `AfterBuild.ps1` script to do any number of things. In my case I'm going to use MSTest to publish some test results which have been generated by Karma into TFS:

```ps
param ([string]$configuration, [string]$projectDir, [string]$targetDir, [string]$publishUrl, [string]$buildNumber, [string] $buildDefinitionName)

$ErrorActionPreference = 'Stop'
Clear

function PublishTestResults([string]$resultsFile) {
 Write-Host 'PublishTests'
 $mstest = 'C:\Program Files (x86)\Microsoft Visual Studio 14.0\Common7\IDE\MSTest.exe'

 Write-Host "Using $mstest at $pwd"
 Write-Host "Publishing: $resultsFile"

 & $mstest /publishresultsfile:$resultsFile /publish:http://my-tfs-server:8080/tfs /teamproject:MyProject /publishbuild:$buildNumber /platform:'Any CPU' /flavor:Release
}

function FailBuildIfThereAreTestFailures([string]$resultsFile) {
 $results = [xml](GC $resultsFile)
 $outcome = $results.TestRun.ResultSummary.outcome
 $fgColor = if($outcome -eq "Failed") { "Red" } else { "Green" }
 $total = $results.TestRun.ResultSummary.Counters.total
 $passed = $results.TestRun.ResultSummary.Counters.passed
 $failed = $results.TestRun.ResultSummary.Counters.failed

 $failedTests = $results.TestRun.Results.UnitTestResult | Where-Object { $_.outcome -eq "Failed" }

 Write-Host Test Results: $outcome -ForegroundColor $fgColor -BackgroundColor "Black"
 Write-Host Total tests: $total
 Write-Host Passed: $passed
 Write-Host Failed: $failed
 Write-Host

 $failedTests | % { Write-Host Failed test: $_.testName
  Write-Host $_.Output.ErrorInfo.Message
  Write-Host $_.Output.ErrorInfo.StackTrace }

 Write-Host

 if($outcome -eq "Failed") {
  Write-Host "Failing build as there are broken tests"
  $host.SetShouldExit(1)
 }
}

function Run() {
  Write-Host "Running AfterBuild.ps1 using Configuration: $configuration, projectDir: $projectDir, targetDir: $targetDir, publishUrl: $publishUrl, buildNumber: $buildNumber, buildDefinitionName: $buildDefinitionName"

 if($buildNumber) {
  $resultsFile = "$projectDir\test-results.trx"
  PublishTestResults $resultsFile
  FailBuildIfThereAreTestFailures $resultsFile
 }
}

# Off we go...
Run
```

Assuming we have a build number this script kicks off the `PublishTestResults` function above. So we won't attempt to publish test results when compiling in Visual Studio on our dev machine. The script looks for `MSTest.exe` in a certain location on disk (the default VS 2015 installation location in fact; it may be installed elsewhere on your build machine). MSTest is then invoked and passed a file called `test-results.trx` which is is expected to live in the root of the project. All being well, the test results will be registered with the running build and will be visible when you look at test results in TFS.

Finally in `FailBuildIfThereAreTestFailures` we parse the `test-results.trx` file (and for this I'm totally in the debt of [David Robert's helpful Gist](https://gist.github.com/davidroberts63/5655441)). We write out the results to the host so it'll show up in the MSBuild logs. Also, and this is crucial, if there are any failures we fail the build by exiting PowerShell with a code of 1. We are deliberately swallowing any error that Karma raises earlier when it detects failed tests. We do this because we want to publish the failed test results to TFS _before_ we kill the build.

## Bonus Karma: `test-results.trx`

If you've read a [previous post of mine](../2016-02-19-visual-studio-tsconfigjson-and-external/index.md) you'll be aware that it's possible to get MSBuild to kick off npm build tasks. Specifically I have MSBuild kicking off an `npm run build`. My `package.json` looks like this:

```json
"scripts": {
    "test": "karma start --reporters mocha,trx --single-run --browsers PhantomJS",
    "clean": "gulp delete-dist-contents",
    "watch": "gulp watch",
    "build": "gulp build",
    "postbuild": "npm run test"
  },
```

You can see that the `postbuild` hook kicks off the `test` script in turn. And that `test` script kicks off a single run of karma. I'm not going to go over setting up Karma at all here; there are other posts out there that cover that admirably. But I wanted to share news of the [karma trx reporter](https://www.npmjs.com/package/karma-trx-reporter). This reporter is the thing that produces our `test-results.trx` file; trx being the format that TFS likes to deal with.

So now we've got a PowerShell hook into our build process (something very useful in itself) which we are using to publish Karma test results into TFS 2012. They said it couldn't be done. They were wrong. Huzzah!!!!!!!
