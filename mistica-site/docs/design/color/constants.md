---
id: constants
title: Constants
---

import {getColors} from '@telefonica/mistica'
const themeNames = ['Movistar', 'Vivo', 'O2', 'O2-classic'];
const colorThemes = themeNames.map(t => getColors(t));
const colors = {};
Object.entries(colorThemes[0]).forEach(([colorName, color]) => {
    colors[colorName] = colorThemes.map((theme) => theme[colorName])
})

<ul class="brandConstants">
   <li id="brandConstantMovistar"></li>
   <li id="brandConstantVivo"></li>
   <li id="brandConstantO2"></li>
   <li id="brandConstantClassicO2"></li> 
</ul>
<div class="constant">
    {Object.entries(colors).map(([name, themedColors]) =>
        <div id="cardConstant">
            {themedColors.map(color =>
                <div title={color} class="cardColorConstant" style={{background: color}}></div>
            )}
            <div class="info">
                <h5>{name}</h5>
            </div>
        </div>
    )}
</div>