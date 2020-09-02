# Error messages

## Definition

We define error scenarios as those where we need to communicate users that an action or process hasn’t been completed successfully.

## Component use

For loading errors specifically, where the content of a screen or even a specific module couldn’t be loaded properly, please use:

* for iOS a [load error](../components/ios/load-error.md)
* for Android a [load error](../components/android/load-error.md)
* for web a [load error](../components/web/load-error.md)

![](../img/load-error-full%20%281%29.jpg)

![](../img/load-error.jpg)

By default, and for any error of high importance consider communicating errors in the same screen of the triggering action using:

* for iOS an [alert](../components/ios/alert.md)
* for Android a [dialog](../components/android/dialog.md)
* for web a [dialog](../components/web/dialog.md)

![](../img/error-alert%20%281%29.jpg)

Showing the error in the same page, so users can easily retry the action or edit something if they have to should always be preferred. In these cases, if the action to submit provokes a loading time it should be indicated in the submit button with a spinner.

![](../img/loading-button.jpg)

However, even though showing the error in the same screen should be preferred, technically it may not always be possible. In these cases consider using an error screen. This may also be useful in cases where we want to provide users extensive information and/or multiple actions, which may be difficult to accommodate in an alert or dialog. Please check out:

* for iOS an [error screen](../components/ios/error-screen.md)
* for Android an [error screen](../components/android/error-screen.md)
* for web an [error screen](../components/web/error-screen.md)

![](../img/error-screen.jpg)

iOS and Android guidelines recommend not using alerts and dialogs too frequently, as they should be reserved for high priority messages we want users to see no matter what. For errors of low importance consider using:

* for iOS a [crouton](../components/ios/crouton.md)
* for Android a [snackbar](../components/android/snackbar.md)
* for web a [snackbar](../components/web/snackbar.md)

![](../img/error-crouton.jpg)

We define low importance errors as those that don’t deal with sensitive information or purchases \(top up’s, upgrades, passwords…\), for instance a language setting that couldn't be changed or a new group conversation name that couldn’t be set.

