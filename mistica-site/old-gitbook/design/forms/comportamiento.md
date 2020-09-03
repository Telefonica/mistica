# Behaviour

## Auto-focus

When a user enters a form, it will not auto-focus on any of the fields.

## Auto-jump

Auto-jump is the feature that allows the user to jump to the next field after filling out the information required by an input field.

This behaviour only applies to fields that have a character restriction for a specific format. For example, a credit card number, a telephone number, a date, a selector, a post code, etc

The auto-jump feature always moves forwards. In other words, if the first field is not filled in and the user goes directly to the second field, there would be an auto-jump to the third field, but never an auto-jump from the second to the first, nor from the third to the first.

### Behaviour in case of error

If there is format error, auto-jump does not occur. Instead, the error message would appear.

### Behaviour in the last field with auto-jump

We have two scenarios:

1. When the last field has auto-jump and **there are no other fields** that precede it. In this case, the keyboard will collapse and disappear. 
2. When the last field has auto-jump and **there are other fields** that precede it. In this case, the focus would jump to the next enabled field. From this point on, the user will need to manually jump to the next field, or close the keyboard.

## Scroll

To provide the user with the full context of the form or the process to be started, and so that he/she doesn't have problems viewing it on a screen with a conversational header and keyboard that can be positioned above the lower fields \(reducing the focus of the screen\), we will set a behavior for the scroll based on the 3 following states:

### State 0

When entering a form, as we've already established, there will be no auto-focus on the first field. Rather, the user will need to proactively tap on the first field, or any other field.

### State 1

When the user taps on one of the fields, the scroll positions the selected field when the header is hidden away, allowing users to view more information.

### State 2

If there is no more content at the bottom of the screen, the scroll will remain static when the user focuses on the remaining fields. If we had a very long form, the scroll would continue to move down, allowing the user to see the following information at all times.

## Errors

Forms have a specific format to give users feedback on their completion and possible errors.

Errors are always specific to the input they refer to, telling users with as much as precision as possible the information they need to complete it successfully. Please use concise but helpful copywriting for these messages and avoid being vague or too general.

Also take into account that form errors related with login are an exception to this rule. They shouldn’t point out a specific form element to avoid any possible unauthorized access. Show these errors with a general message in an alert instead.

These error messages are persistent until users retry submitting the form.

