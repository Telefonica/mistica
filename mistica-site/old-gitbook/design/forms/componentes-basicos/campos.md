# Fields

Fields allow users to enter information. In our system, the fields are of the following types:

* Text
* Dropdown
* Password
* Text area
* Card number
* Expiry date
* CVV
* Telephone number

## Type

## Anatomy

1. Container
2. Label
3. Input text
4. Icon \(optional\)
5. Help elements \(optional\)

### 1. Container

View the fields within a single screen. The width of the container varies depending on the [type of layout](../estructura.md#disposicion-de-los-elementos-de-formulario) and the type of information that the user needs to enter in the field.

### 2. Label

Labels inform users about what information needs to be entered in each of the fields. They need to be clear and concise. We must make scanning easier for users. Always keep in mind that labels are not help texts.

### 3. Input text

* **Text:** The text that the user has entered in a text field.
* **Cursor:** Indicates the position where the text is inserted inside a field.

### 4. Icon \(optional\)

We can use the icons for two purposes:

* **Contextual:** To provide the user with greater context about the type of information they have to enter. For example, adding the credit card icon in the field where he/she needs to enter their card number. 
* **Actionable:** his allows users to perform an additional action within the field. For example, tapping on an eye icon to show or hide a password.

### 5. Help elements

* **Help text:** Help texts provide additional information on how to complete a field within a form. They can also be used to clarify how said information will be used. Help texts should be concise and easy to read.  
* **Error message:** When the data entered does not conform to the acceptable parameters. This could be because it has not been entered, or because it has been entered incorrectly. An error message gives the user instructions on how to solve the problem. 
* **Character counter:** In text areas where there is a character limit, we will indicate the number of characters used and the total character limit.

:::note
If the field already has a help text, the error message will replace that text until the information has been entered correctly.
:::

## States

It is important for the user to be able to recognise the state of a field at a simple glance. As such, fields can be presented in the following ways:

* Empty
* Filled
* Focus
* Disabled

