# External

External mode is applied to take the user to a different app of their device, leaving Novum app in background. From the user’s point of view, they are aware of being in a webview and in a different app.

## Description

This is an internal webview designed for containing **external unknown websites**.

* **External websites** are those that aren’t prepared to work as part of our app simulating a native screen. This websites have their own navigation and/or footer and users could navigate to a different website from them. 
* It’s an **unknown domain** when the url isn’t under any ob’s domain and its content isn’t related to the ob’s products, services or other topics. In terms of security it’s safer not to load this domains inside our app so we don’t know the security level of these websites. These domains don’t meet the technical conditions required to be classified as a known domain. 

## **Applications**

Launching an external website URL outside the app, only when it's an unknown domain

## **Behaviour**

### **Back behaviour**

Native back behaviour is defined by the landing app.

### **Entrance transition**

Default transition given by the system.

## Useful links <a id="useful-links"></a>

How is it in Android?

{% page-ref page="../android/external.md" %}

 Related technical documentation

{% page-ref page="../../../develop/webviews.md" %}

  


