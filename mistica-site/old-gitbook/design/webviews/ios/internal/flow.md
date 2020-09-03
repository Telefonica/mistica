---
description: Presentation
---

# Flow

## Description

From the user’s point of view this flow imitates the native behaviour.

We use this type of webview by default throughout the app unless we face a flow with special needs that fits better with a modal or browser flow \(see in the following sections\).

## Applications

### 1. Standard Nested Flow

Where we just want to keep the native behaviour.

### 2. Internal purchase flow or funnel

Critical internal flows where we don’t want the user to leave in an easy way.  


## Behaviour

### Standard nested flow behaviour

![iOS Internal Flow Standard behaviour](../../img/ios_internal_flow_standard.png)

### Purchase flow behaviour

![iOS Internal Flow Purchase behaviour](../../img/ios_internal_flow_purchase.png)

### Back behaviour

Navigation bar back is chronological \(back one step\)

### Entrance transition

Push \(from the right side\)

### Progress indicator

Native progress indicator with brand color + generic text

![](../../img/ios_progress-indicator.png)

### Error

No connection text + tap to reload button for connection errors  
Generic text + tap to reload button for other errors

### Title

Once the webview finishes loading it will use the title from the &lt;title&gt; html tag \(document.title\) to populate the title in the navigation bar.

It could be modified using the web view javascript bridge message SET\_TITLE.

## Screen Configuration

### Tab nav

Purchase flow - Always False  
Standard nested flow - Always True

### Nav bar

True - by default

![](../../img/ios_internal_flow_navbar_true.png)

False - when an image is designed to reach the top of the screen  
Actions keep floating when user scrolls down

![](../../img/android_internal_flow_navbar_false.png)

## Useful links <a id="useful-links"></a>

How is it in Android?

{% page-ref page="../../android/internal/flow.md" %}

 Related technical documentation

{% page-ref page="../../../../develop/webviews.md" %}



