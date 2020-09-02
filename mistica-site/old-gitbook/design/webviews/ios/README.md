# iOS

## [Internal mode](internal/)

This mode applies to internal websites, those that are **prepared to work as part of our app simulating a native screen**. It **keeps the user** inside Novum app, and they are **not aware** of being in a webview. It has 2 types of presentation, flow and modal.

{% page-ref page="internal/" %}

## [Browser mode](browser.md)

This webview mode applies to **external known websites**. It helps to make it clear for the users that they are taken to another website, but keep them into our app. From the user’s point of view, they are **aware of being in a webview**.

{% page-ref page="browser.md" %}

## [External mode](external.md)

This is a mode for containing **external unknown websites.** It **takes the user to a different app**, leaving Novum app in background. From the user’s point of view, they are **aware of being in a different app**.

{% page-ref page="external.md" %}

## [Configuration by default](configuration-by-default.md)

When no parameters are found in the URL in order to perform a demanded mode, a mode and transition by default will be applied. Here you can see how it works.

{% page-ref page="configuration-by-default.md" %}



