---
id: buttons
title: Buttons
---

Buttons let users do actions and make choices immediately with just a simple interaction.

### Use mdx
Here is an example of using mistica components in mdx

import {ButtonPrimary, ThemeContextProvider, alert} from '@telefonica/mistica';

<div class="componentContainer">

<div class="componentPreview">
    <ThemeContextProvider 
        theme={{skin: 'Movistar'}}
    >
        <ButtonPrimary onPress={() => alert({title: 'pressed!'})}>Button primary</ButtonPrimary>
    </ThemeContextProvider>
</div>

<div class="componentPreview">
    <ThemeContextProvider 
        theme={{skin: 'Vivo'}}
    >
        <ButtonPrimary onPress={() => alert({title: 'pressed!'})}>Button primary</ButtonPrimary>
    </ThemeContextProvider>
</div>

<div class="componentPreview">
    <ThemeContextProvider 
        theme={{skin: 'O2'}}
    >
        <ButtonPrimary onPress={() => alert({title: 'pressed!'})}>Button primary</ButtonPrimary>
    </ThemeContextProvider>
</div>

<div class="componentPreview">
    <ThemeContextProvider 
        theme={{skin: 'O2-classic'}}
    >
        <ButtonPrimary onPress={() => alert({title: 'pressed!'})}>Button primary</ButtonPrimary>
    </ThemeContextProvider>
</div>

</div>

<br/><br/>
And here is an example of a live code block. You can edit the code:
<br/><br/>

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
