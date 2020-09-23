---
id: icons
title: Icons
---

import * as Icons from '@telefonica/mistica/dist/generated/mistica-icons'

<div class="constant">
    <div id="cardConstant">
        {Icons.map((Icon, index) =>
            <Icon key={index} size={24} color="black" />
        )}
    </div>
</div>