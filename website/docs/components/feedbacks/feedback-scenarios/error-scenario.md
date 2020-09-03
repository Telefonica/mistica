---
id: error-scenario
title: Error messages
---

## Definition

We define error scenarios as those where we need to communicate users that an action or process hasn’t been completed successfully.

## Component use

For loading errors specifically, where the content of a screen or even a specific module couldn’t be loaded properly, please use:

* for iOS a [load error](../ios/load-error.md)
* for Android a [load error](../android/load-error.md)
* for web a [load error](../web/load-error.md)

![](../../../img/load-error-full.jpg)

![](../../../img/load-error.jpg)

By default, and for any error of high importance consider communicating errors in the same screen of the triggering action using:

* for iOS an [alert](../ios/alert.md)
* for Android a [dialog](../android/dialog.md)
* for web a [dialog](../web/dialog.md)

![](../../../img/error-alert.jpg)

Showing the error in the same page, so users can easily retry the action or edit something if they have to should always be preferred. In these cases, if the action to submit provokes a loading time it should be indicated in the submit button with a spinner.

![](../../../img/loading-button.jpg)

However, even though showing the error in the same screen should be preferred, technically it may not always be possible. In these cases consider using an error screen. This may also be useful in cases where we want to provide users extensive information and/or multiple actions, which may be difficult to accommodate in an alert or dialog. Please check out:

* for iOS an [error screen](../ios/error-screen.md)
* for Android an [error screen](../android/error-screen.md)
* for web an [error screen](../web/error-screen.md)

![](../../../img/error-screen.jpg)

iOS and Android guidelines recommend not using alerts and dialogs too frequently, as they should be reserved for high priority messages we want users to see no matter what. For errors of low importance consider using:

* for iOS a [crouton](../ios/crouton.md)
* for Android a [snackbar](../android/snackbar.md)
* for web a [snackbar](../web/snackbar.md)

![](../../../img/error-crouton.jpg)

We define low importance errors as those that don’t deal with sensitive information or purchases \(top up’s, upgrades, passwords…\), for instance a language setting that couldn't be changed or a new group conversation name that couldn’t be set.
