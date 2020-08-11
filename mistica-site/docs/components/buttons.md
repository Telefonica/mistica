---
id: buttons
title: Buttons
---

Buttons let users do actions and make choices immediately with just a simple interaction.

### Use mdx
Here is an example of using mistica components in mdx

import {ButtonPrimary, ThemeContextProvider, alert} from '@telefonica/mistica';

<ThemeContextProvider
    theme={{skin: 'Movistar'}}
>
    <ButtonPrimary onPress={() => alert({title: 'pressed!'})}>Button example</ButtonPrimary>
</ThemeContextProvider>

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
        Button example
    </ButtonPrimary>
</ThemeContextProvider>
```
