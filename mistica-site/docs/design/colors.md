---
id: colors
title: Color Palette
---

import {getColors} from '@telefonica/mistica'
const colors = getColors('Movistar');

<div class="palette">
{Object.entries(colors).map(([name, color]) =>
<div id="cardPalette">
    <div class="cardColor" style={{background: color}}></div>
    <div class="info">
        <h4>{name}</h4>
        <h4>{color}</h4>
    </div>
</div>
)}
</div>