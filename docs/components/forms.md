---
id: forms
title: Forms
sidebar_label: Forms
---

This documentation is intended to establish guidelines for designing forms with the different components that comprise the Novum design system, known as Mística. The objective is to learn about their use, behavior, the elements that comprise them and the types of structures that we can build.

# Use

The forms are used to obtain information and guide people. Designing the forms well requires making decisions about their flow, structure and their various component parts.

## Good practices
A form is a conversation. And just like all conversations, this needs to be structured in a logical way, between two parties: in this case, between the user and our app. With the aim of building forms that facilitate coherent communication through our product, making this process as easy as possible for users, we've compiled several tips that can help us improve usability:

- Request only the necessary information: We recommend deleting the fields whose information can be: collected in another way; collected later; or simply deleted. Remember that short forms increase the conversion ratio.

- Use section titles to group together related fields, helping to provide more context and facilitate interface scanning.

- Follow a logical and predictable order: For example, we'll first request the credit card number, followed by the expiration date and lastly the CVV number.

# Structure
When a user accesses a form, we must, insofar as possible, avoid showing a large number of fields that require filling out, since this can frustrate the user when completing the form. 
While it may be difficult to ascertain whether or not a form is very long, the type of flow or context can help us when structuring the different steps. We at Novum recommend designing forms with a maximum of 3 fields per step, as long as these fields are of the same type.

## Layout of form elements
To organise the fields within a form, we have a modular layout that allows us to modify their distribution in accordance with our requirements. The layout can assume the form of a single column, which will be the default option, that stacks the fields vertically; two columns, allowing us to horizontally group related fields; or a combination of both layouts throughout the form.

### One-column layout
This layout allows us to stack the fields vertically, which makes it easier for users to scan through and complete a form.

### Two-column layout
If we need to distribute multiple fields in the same row, we'll use this two-column layout. We'll restrict its use for related fields, which require the user to enter a little bit of information. Remember that the fields in the two-column format are not as wide as those in the one-column format; as such, they serve as reference or visual orientation for the user in fields where 1 to 4 characters must be entered.

<div class="callout callout--info">
    <p>As we have mentioned above, we can combine the one-column and two-column layouts throughout the form. The fields for entering a payment method are a clear example of the combination of full-width fields immediately followed by two side-by-side fields in the two-column format.</p>
</div>

# Fields
Fields allow users to enter information. In our system, the fields are of the following types:
- Text
- Dropdown
- Password
- Text area
- Card number
- Expiry date
- CVV
- Telephone number

## Anatomy
1. Container
2. Label
3. Input text
4. Icon (optional)
5. Help elements (optional)

#### 1. Container
View the fields within a single screen. The width of the container varies depending on the type of layout and the type of information that the user needs to enter in the field.

#### 2. Label
Labels inform users about what information needs to be entered in each of the fields. They need to be clear and concise. We must make scanning easier for users. Always keep in mind that labels are not help texts.

#### 3. Input text
- **Text:** The text that the user has entered in a text field.
- **Cursor:** Indicates the position where the text is inserted inside a field.

#### 4. Icon (optional)
We can use the icons for two purposes:

- **Contextual:** To provide the user with greater context about the type of information they have to enter. For example, adding the credit card icon in the field where he/she needs to enter their card number.

- **Actionable:** his allows users to perform an additional action within the field. For example, tapping on an eye icon to show or hide a password.

#### 5. Help elements
- **Help text:** Help texts provide additional information on how to complete a field within a form. They can also be used to clarify how said information will be used. Help texts should be concise and easy to read. 

- **Error message:** When the data entered does not conform to the acceptable parameters. This could be because it has not been entered, or because it has been entered incorrectly. An error message gives the user instructions on how to solve the problem.

- **Character counter:** In text areas where there is a character limit, we will indicate the number of characters used and the total character limit.