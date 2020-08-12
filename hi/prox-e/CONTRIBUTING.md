# Contributing to the covidsimteam's CARE Application

Thank you for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to the repo. These are just guidelines, not rules, use your best judgment and feel free to propose changes to this document in a pull request.

## Test Coverage

Please write tests whenever you find a non-trivial untested functionality.

## Type Coverage

Check if you are keeping the TypeScript type coverage high enough

```Bash
npx tscov --min-coverage=95 -p src/ --details
```

## Logging

Check if you are following the correct Bunyan logging format that we can later parse e.g. with ELK or as Couch documents.

```JavaScript
logger.info({port: `http://localhost:${port}`,  user: `${process.env.DATABASE_USER}`}, 'Proxy server started');
```

As a rule of thumb, the msg string should be at the end and everything else must be JSONifiable. 

## Table of Contents
 - [How To Contribute](#how-to-contribute)
  - [Reporting Issues](#reporting-issues)
    - [Before Submitting an Issue](#before-submitting-an-issue)
    - [Determining the Repository](#determining-the-repository)
    - [Submitting the Issue](#submitting-the-issue)
  - [Submitting a Pull Request](#submitting-a-pull-request)
    - [Guidelines for Submitting](#guidelines-for-submitting)
    - [Code Style](#code-style)

## How To Contribute

### Reporting Issues

Before submitting an issue, please go through [the list below](#before-submitting-an-issue) as you might find a solution to your issue.

#### Before Submitting an Issue

* Make sure you get the latest version of the code and run through the docs in the src and wiki to see if this resolves your issue.
* Go through [all the issues](https://github.com/covidsimteam/unify-core/issues?utf8=%E2%9C%93&q=is%3Aissue) to see if the issue has already been created. It could have been closed with a resolution, so check closed issues, too.
* [Determine which repository](#determining-the-repository) the problem should be reported in.


#### Determining the Repository

There are several repositories being used in covidsimteam, which makes it difficult to determine which one to report an issue to. Don't worry if you aren't sure, we can always move it!

`ui-core` is the UI and visualizations hub for designers and front-end engineers.

`py-core` is the Apache Spark-based hub for data analysts, modeling and ML experts.

`unify-core` is the highest upstream repo in covidsimteam as it integrates finalized algorithms and models from py-core repo, and visualizations and dashboards from ui-core repo.

`proxy` will be merged into `unify-core` as one of its micro-services.

Apart from these, unify-core will also contain dashboards displaying server load, health and Spark job metrics.

When in doubt, create your own folder with your components and it to the `ui-core` repo with a detailed README.

#### Submitting the Issue

* **Use a clear and descriptive title** for the issue to identify the problem. This makes it easier for others to find.
* **Describe the exact steps to reproduce the problem** with as many details as needed.
* **Provide your configuration** by running `ionic info` in a terminal from *within* the project folder and pasting this information in the issue.

### Submitting a Pull Request

#### Guidelines for Submitting

When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, do not bundle more than one "feature" or bug fix per PR. Doing so makes it very hard to accept it if one of the fixes has issues.

It's always best to create two smaller PRs than one big one.

Talk to us before creating a PR that refactors the code or directory structure of the project. This project is constantly changing to reflect the latest version of Ionic Framework so sometimes it will be in the process of getting fixed.

#### Code Style

Make sure to follow the existing code style as much as possible.

* No underscores prefixing TS functions.
* Use flat Sass.
 * **Don't** use [BEM conventions](https://css-tricks.com/bem-101/).
 * Avoid nesting selectors. This is done to make it easier for users without Sass experience to understand and read.

# Submitting issues for covidsimteam's CARE Application

<!--
IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING

If you are having problems formatting your issue please refer to this article on using markdown in Github: https://guides.github.com/features/mastering-markdown/
-->

**I'm submitting a ...**  (check one with "x")
[ ] bug report
[ ] feature request
[ ] support request => Please do not submit support requests here, email one of us from [covidsim.team/about-us](https://covidsim.team/about-us).

**Current behavior:**
<!-- Describe how the bug manifests. -->

**Expected behavior:**
<!-- Describe what the behavior would be without the bug. -->

**Steps to reproduce:**
<!-- If you are able to illustrate the bug or feature request with an example, please provide steps to reproduce and if possible a demo using the following template:

http://plnkr.co/edit/GJte2b?p=preview
-->

**Related code:**

```
insert any relevant code here
```

**Other information:**
<!-- List any other information that is relevant to your issue. Stack traces, related issues, suggestions on how to fix, Stack Overflow links, forum links, etc. -->

**Ionic info:** (run `ionic info` from a terminal/cmd prompt and paste output below):

```
insert the output from ionic info here
```


