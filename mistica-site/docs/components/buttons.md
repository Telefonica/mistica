---
id: buttons
title: Buttons
---

Buttons let users do actions and make choices immediately with just a simple interaction.

### Use mdx
Here is an example of using mistica components in mdx

import {ButtonPrimary} from '@telefonica/mistica'
import MultiBrandExample from '../../src/components/multi-brand-example.js'

<MultiBrandExample>
    <ButtonPrimary onPress={() => alert({title: 'pressed!'})}>Button primary</ButtonPrimary>
</MultiBrandExample>

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
