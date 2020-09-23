---
id: icons
title: Icons
---

import {ThemeContextProvider} from '@telefonica/mistica';
import * as Icons from '@telefonica/mistica/dist-es/generated/mistica-icons';

<div class="iconBlock">
<div id="iconModule">
    <ThemeContextProvider
        theme={{
            skin: 'Movistar',
            i18n: {locale: 'es-ES'},
        }}
    >
        {Object.keys(Icons).map((name, index) => {
            const Icon = Icons[name];
            return (
                <div class="info" key={index}>
                    <Icon size={40} />
                    <h5 id={name}>{name}</h5>
                </div>
            );
        })}
    </ThemeContextProvider>
    </div>
</div>