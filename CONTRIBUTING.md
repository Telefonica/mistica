# Contributing to Mistica

Contributions are welcome, and they are greatly appreciated! Every little bit helps,


## How to contribute

### Bugs reports & general feedback

If you find a bug in the source code, a mistake in the documentation, or want to send feedback to the core team, you can help us by submitting an issue to the GitHub repository for that platform.
- mistica-web [issues](https://github.com/Telefonica/mistica-web/issues)
- mistica-android [issues](https://github.com/Telefonica/mistica-android/issues)
- mistica-ios [issues](https://github.com/Telefonica/mistica-ios/issues)

If you are reporting a bug, please include:
- Your operating system name and version of mistica
- Detailed steps to reproduce the bug.

Even better, you propose a fix with a pull request and link it to the issue!

### Fixing Bugs

Look through the GitHub issues for bugs. Anything tagged with “bug” and “help wanted” is open to whoever wants to implement it. If you don't find the issue you try to fix, please create the issue before submmiting any [pull request](#Rull-Request)

### Components requests

This document explains how the Mistica Core team handles requests for new components, as well as requests for changes to the UX of existing components. UX changes include any change which alters the appearance, behavior, or end-user interaction with a component.

By understanding the guidelines in this document the requester, as well as the Mistica Core team, will save time and energy spent handling these types of requests.

#### New Component 

#### Extending Existing Components


### Pull Request

The best way to make an impact is by creating [pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests). Pull requests should be ‘solutions’ to GitHub issues.

To make a pull request:

- Make sure there’s a GitHub issue for the change you’re proposing.
- Branch for master and write code on that branch.
  - `git checkout -b <YOUR_BRANCH_NAME>`
  - A good name for a branch describes the thing you’ll be working on, e.g. `doc-button-improvements`, `fix-feedback-component` etc.
- Please test your changes before create a pull request. 
- When the coding is done and you’re finished testing your changes, create a pull request to merge your branch’s contributions into the corresponding Mistica repo
  - Use a descriptive title
  - Link the issues that are related to your PR in the body
- The pull request will be triaged by a core team member and code reviewed by them. Code review, no feelings
  - When we review your code submission, they must follow our coding style, the code should be clear enough, documented if required and the patch Subject and Description well formed (within others). If your code needs some improvement, someone of the reviewers or core developers will write a comment in your Pull Request, so please take in count the suggestion there, otherwise your request will never be merged.
Despite the effort that took for you to create the contribution, that is not an indication that the code have to be merged into upstream, everything will be reviewed and must be aligned as the code base.
  - Once a core member has reviewed your PR, you might need to make changes before it gets merged. To make it easier on us, please make sure to avoid using git commit --amend or force pushes to make corrections. By avoiding rewriting the commit history, you will allow each round of edits to become its own visible commit. This helps the people who need to review your code easily understand exactly what has changed since the last time they looked. 
- If the pull request is accepted, the accepting core team member will merge the pull request for you.
- After your contribution is merged, it’s not immediately available to all Mistica users. Your change will be shipped as part of the next release. If your change is time critical, please let us know [appscore@tuenti.com](mailto:appscore@tuenti.com) so we can schedule a release for your change.

#### Changelog
We use [GitHub Releases](https://github.com/blog/1547-release-your-software) to manage our releases, including the changelog between every release. You'll find a complete list of additions, fixes, and changes on the release page of each platform:
 - mistica-web [Releases page](https://github.com/Telefonica/mistica-web/releases)
 - mistica-android [Releases page](https://github.com/Telefonica/mistica-android/releases)
 - mistica-ios [Releases page](https://github.com/Telefonica/mistica-ios/releases)

## Component checklist
