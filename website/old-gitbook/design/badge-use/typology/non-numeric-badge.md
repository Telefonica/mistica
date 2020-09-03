# Non-numeric badge

## Definition

The non-numeric badge is an element displayed on any component of the app to indicate the user that there is **new non-urgent and impersonal information** associated with it.

The non-numeric badge is used for:

* Non-urgent and impersonal use cases
  * To indicate the user that is new information available. The new available information is not personal. It is available for a group of users, not for each single user.

The non-numeric badge:

* Should **not send push notifications** or other communications to the users
* Should **not count in the app launcher badge**

## Behavior

### **New information is available**

* The non-numeric badge is **displayed on the element that contains new information.**
  * If an element of the screen contains new information, **the tab bar should also indicate** the new information existence. 

![](../img/new-information-available.png)

### Connection between the badge and the new information

* The non-numeric badge should **guide the user** to the new information.
  * If the new information is placed at inner navigation levels, the badge should guide the user until the final new information destination \(like a breadcrumb\).

![](../img/connection-between-badge-and-information_%20%281%29.png)

![](../img/connection-between-badge-and-information_1.png)

### Easy to clear

* The non-numeric badge totally disappears when the new information is displayed on the screen or viewed by the user.

### Anatomy

* The non-numeric badge has **no numbers.**
* It is recommended to place the non-numeric badge on the **right or upper right side** of the element that is indicating the existence of new information.

