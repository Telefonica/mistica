# Interaction

## Button interaction

A button can have different states \(normal, pressed or selected depending on the platform: android or iOS, and loading\). This last state, the loading one, provides additional information with an animation to the user. 

### Loading

It's very important for users to **get feedback** when they **interact** with the buttons, because it provides more context about the action being done and it makes the waiting time feel shorter.‌

* When a button needs a loading state to send or receive information from the server, an intermediate state between the action and the final feedback screen is used. 
* A loading icon will appear in the intermediate state next to a text label and it will express the action in gerund. The button will go now into a disabled state. Consequently, users won't be left wondering if the action is really being done. 
* To keep the button from getting frozen in that state and making the user frustrated, a maximum time \(TBD\) the button will stay in a loading state should be defined. 

![](../.gitbook/assets/buttonsloading_cropped.gif)

:::note
The loading state should be used when a wait needs to be backed up with context about the action. For example, during a payment process where we estimate that payment transactions will create a waiting time for the user.

When a flow is defined, in addition to the button copy for the normal state it's important to also indicate the copy for the loading state. Following the previous example, the “Pay” CTA could have copy in its loading state like “processing payment”.
:::

## Interaction in relation to the layout

### Scroll 

The buttons in flows should always be positioned statically at the bottom of the screen. These buttons go inside a container, which helps to avoid problems with seeing the content when users scroll.  


![](../.gitbook/assets/buttonsscrollbehavior.gif)

![Fixed button scroll detail.](../.gitbook/assets/buttonsscrollbehavior_cropped.gif)

