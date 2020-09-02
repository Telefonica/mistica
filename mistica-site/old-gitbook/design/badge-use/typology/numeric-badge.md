# Numeric badge

## Definition

The numeric badge is an element displayed on any component to indicate the user that there is **new personal and urgent information -- only conversations and personal communications** associated with it.

The numeric badge is used for:

* More urgent and personal use cases
  * To indicate the user that is new information available. It is **only available for each single user:**
    * For example, new personal communication or conversation 

The numeric badge:

* Should **send push notifications** or other communications to the users
* Should **count in the app launcher badge**

## Behavior

### New information is available

* The numeric badge is displayed on the element that contains **new information -- conversations and communications**
  * If an element of the screen contains new information -- conversations and communications, the **tab bar should also indicate** the new information existence. 
    * The number displayed on each tab should indicate the sum of the total number of new information -- conversations and communications distributed on that screen.

![](../img/new-information-available_numeric.png)

### Connection between the badge and the new information

* The numeric badge should guide the user to the new information.
  * If the new information is placed at inner navigation levels, the badge should guide the user until the final new information destination \(like a breadcrumb\).

![](../img/connection-between-badge-and-information_1-numeric.png)

![](../img/connection-between-badge-and-information_.png)

### Easy to clear

* The numeric badge totally disappears when the new information is displayed on the screen or viewed by the user.
  * If the user has a numeric badge with number 9 and displays 5 new pieces of information, the badge should be discounted by 5 showing number 4.
    * The same logic is replied in the app launcher

### Anatomy

* The numeric badge has a maximum of 2 digits. from 1 to 9. If the number of new information is more than 9, the numeric number should display a +9.
* It is recommended to place the numeric badge on the right or upper right side of the element that is indicating the existence of new information.

![](../img/connection-between-badge-and-information_launcher.png)

