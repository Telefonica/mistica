---
id: introduction
title: Introduction
---

<!-- AQUÍ EMPIEZA EL CONTENIDO -->
Buttons let users do actions and make choices immediately with just a simple interaction.

### Use mdx
Here is an example of using mistica components in mdx

<MultiBrandExample>
    <Inline space={16}>
        <ButtonPrimary submit>Button action</ButtonPrimary> 
        <ButtonSecondary submit>Button action</ButtonSecondary>
    </Inline>
</MultiBrandExample>


<br/><br/>

And here is an example of a live code block. You can edit the code:

<br/>

```jsx live

<ThemeContextProvider
    theme={{skin: 'Movistar'}}
>
    <ButtonPrimary
        onPress={() => alert({title: 'pressed!'})}
    >
        Button primary
    </ButtonPrimary>
</ThemeContextProvider>

```
