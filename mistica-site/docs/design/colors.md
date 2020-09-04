---
id: colors
title: Color
---

import {getColors} from '@telefonica/mistica'
const themeNames = ['Movistar', 'Vivo', 'O2', 'O2-classic'];
const colorThemes = themeNames.map(t => getColors(t));
const colors = {};
Object.entries(colorThemes[0]).forEach(([colorName, color]) => {
    colors[colorName] = colorThemes.map((theme) => theme[colorName])
})

### Color Palette
<div class="palette">
<div id="cardPalette">
    <div class="cardColor"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#color</h4>
    </div>
</div>
</div>

<br/><br/>

### Color Constant
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