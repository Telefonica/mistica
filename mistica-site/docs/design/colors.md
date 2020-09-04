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

## Color Palette
### Movistar
<div class="palette">
<div id="cardPalette">
    <div class="cardColor movistarBlue"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#019DF4</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueDark"></div>
    <div class="info">
        <h4>movistarBlueDark</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight60"></div>
    <div class="info">
        <h4>movistarBlueLight60</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight50"></div>
    <div class="info">
        <h4>movistarBlueLight50</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight30"></div>
    <div class="info">
        <h4>movistarBlueLight30</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight10"></div>
    <div class="info">
        <h4>movistarBlueLight10</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight60Percent25"></div>
    <div class="info">
        <h4>movistarBlueLight60Percent25</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight30Percent25"></div>
    <div class="info">
        <h4>movistarBlueLight30Percent25</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreen"></div>
    <div class="info">
        <h4>movistarGreen</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenDark"></div>
    <div class="info">
        <h4>movistarGreenDark</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenLight50"></div>
    <div class="info">
        <h4>movistarGreenLight50</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenLight30"></div>
    <div class="info">
        <h4>movistarGreenLight30</h4>
        <h4>#color</h4>
    </div>
</div>
</div>

### Vivo
<div class="palette">
<div id="cardPalette">
    <div class="cardColor movistarBlue"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#019DF4</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueDark"></div>
    <div class="info">
        <h4>movistarBlueDark</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight60"></div>
    <div class="info">
        <h4>movistarBlueLight60</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight50"></div>
    <div class="info">
        <h4>movistarBlueLight50</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight30"></div>
    <div class="info">
        <h4>movistarBlueLight30</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight10"></div>
    <div class="info">
        <h4>movistarBlueLight10</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight60Percent25"></div>
    <div class="info">
        <h4>movistarBlueLight60Percent25</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight30Percent25"></div>
    <div class="info">
        <h4>movistarBlueLight30Percent25</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreen"></div>
    <div class="info">
        <h4>movistarGreen</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenDark"></div>
    <div class="info">
        <h4>movistarGreenDark</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenLight50"></div>
    <div class="info">
        <h4>movistarGreenLight50</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenLight30"></div>
    <div class="info">
        <h4>movistarGreenLight30</h4>
        <h4>#color</h4>
    </div>
</div>
</div>

### O2
<div class="palette">
<div id="cardPalette">
    <div class="cardColor movistarBlue"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#019DF4</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueDark"></div>
    <div class="info">
        <h4>movistarBlueDark</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight60"></div>
    <div class="info">
        <h4>movistarBlueLight60</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight50"></div>
    <div class="info">
        <h4>movistarBlueLight50</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight30"></div>
    <div class="info">
        <h4>movistarBlueLight30</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight10"></div>
    <div class="info">
        <h4>movistarBlueLight10</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight60Percent25"></div>
    <div class="info">
        <h4>movistarBlueLight60Percent25</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight30Percent25"></div>
    <div class="info">
        <h4>movistarBlueLight30Percent25</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreen"></div>
    <div class="info">
        <h4>movistarGreen</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenDark"></div>
    <div class="info">
        <h4>movistarGreenDark</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenLight50"></div>
    <div class="info">
        <h4>movistarGreenLight50</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenLight30"></div>
    <div class="info">
        <h4>movistarGreenLight30</h4>
        <h4>#color</h4>
    </div>
</div>
</div>

### Classic O2
<div class="palette">
<div id="cardPalette">
    <div class="cardColor movistarBlue"></div>
    <div class="info">
        <h4>movistarBlue</h4>
        <h4>#019DF4</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueDark"></div>
    <div class="info">
        <h4>movistarBlueDark</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight60"></div>
    <div class="info">
        <h4>movistarBlueLight60</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight50"></div>
    <div class="info">
        <h4>movistarBlueLight50</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight30"></div>
    <div class="info">
        <h4>movistarBlueLight30</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight10"></div>
    <div class="info">
        <h4>movistarBlueLight10</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight60Percent25"></div>
    <div class="info">
        <h4>movistarBlueLight60Percent25</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight30Percent25"></div>
    <div class="info">
        <h4>movistarBlueLight30Percent25</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreen"></div>
    <div class="info">
        <h4>movistarGreen</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenDark"></div>
    <div class="info">
        <h4>movistarGreenDark</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenLight50"></div>
    <div class="info">
        <h4>movistarGreenLight50</h4>
        <h4>#color</h4>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenLight30"></div>
    <div class="info">
        <h4>movistarGreenLight30</h4>
        <h4>#color</h4>
    </div>
</div>
</div>

<br/><br/>

## Color Constant
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