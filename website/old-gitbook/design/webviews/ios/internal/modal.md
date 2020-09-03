# Modal

## Description

This type of webview is a way to step out of the normal flow of the app so the user should accomplish something prior to continuing on their way.

Consider creating a modal context only when a task must be completed or abandoned to continue using the app.

## **Applications**

### **Subtask flow that can be abandoned**

Non critical subtasks, so it doesn’t matter if the users leave, that should be accomplished or abandoned to continue using the app.

{% hint style="warning" %}
**Don’t apply to purchase flows. For internal purchase flows should always be applied** [**Internal Webview mode with Flow Presentation.**](flow.md)\*\*\*\*
{% endhint %}

## **Behaviour**

This mode gives the user the opportunity to leave the whole flow and also the possibility of going back chronologically.

![iOS Internal Modal behaviour](../../img/ios_internal_modal.png)

A subtask could have several steps/screens. Modal presentation should be applied for the first screen, and flow presentation should be applied from the step 2 to the end of the subtask. Close option will remain until de subtask is finished or abandoned.

![](../../img/ios_internal_modal_subtask.png)

### **Back behaviour**

Close action - the user leaves and closes the modal webview. It must continue showing from step 2 and so on.

### **Entrance transition**

The default transition vertically slides the modal view up from the bottom of the screen and back down once dismissed.

### **Progress indicator**

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

Not configurable - Always false.

### Nav bar

True - by default

![](../../img/ios_internal_modal_navbar_true.png)

False - when an image is designed to reach the top of the screen  
Actions keep floating when user scrolls down

![](../../img/ios_internal_modal_navbar_false.png)

## Useful links <a id="useful-links"></a>

How is it in Android?

{% page-ref page="../../android/internal/modal.md" %}

 Related technical documentation

{% page-ref page="../../../../develop/webviews.md" %}

  

