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
#### Primary
<div class="palette">
<div id="cardPalette">
    <div class="cardColor movistarBlue"></div>
    <div class="info">
        <h5>movistarBlue</h5>
        <h5>#019DF4</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueDark"></div>
    <div class="info">
        <h5>movistarBlueDark</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight60"></div>
    <div class="info">
        <h5>movistarBlueLight60</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight50"></div>
    <div class="info">
        <h5>movistarBlueLight50</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight30"></div>
    <div class="info">
        <h5>movistarBlueLight30</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight10"></div>
    <div class="info">
        <h5>movistarBlueLight10</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight60Percent25"></div>
    <div class="info">
        <h5>movistarBlueLight60Percent25</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight30Percent25"></div>
    <div class="info">
        <h5>movistarBlueLight30Percent25</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreen"></div>
    <div class="info">
        <h5>movistarGreen</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenDark"></div>
    <div class="info">
        <h5>movistarGreenDark</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenLight50"></div>
    <div class="info">
        <h5>movistarGreenLight50</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenLight30"></div>
    <div class="info">
        <h5>movistarGreenLight30</h5>
        <h5>#color</h5>
    </div>
</div>
</div>

#### Secondary
<div class="palette">
<div id="cardPalette">
    <div class="cardColor pepper"></div>
    <div class="info">
        <h5>movistarBlue</h5>
        <h5>#019DF4</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor pepperDark"></div>
    <div class="info">
        <h5>movistarBlueDark</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor pepperLight"></div>
    <div class="info">
        <h5>movistarBlueLight60</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor egg"></div>
    <div class="info">
        <h5>movistarBlueLight50</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor eggLight"></div>
    <div class="info">
        <h5>movistarBlueLight30</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor pink"></div>
    <div class="info">
        <h5>movistarBlueLight10</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor purple"></div>
    <div class="info">
        <h5>movistarBlueLight60Percent25</h5>
        <h5>#color</h5>
    </div>
</div>
</div>

#### Neutral
<div class="palette">
<div id="cardPalette">
    <div class="cardColor grey0"></div>
    <div class="info">
        <h5>movistarBlue</h5>
        <h5>#019DF4</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor grey1"></div>
    <div class="info">
        <h5>movistarBlueDark</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor grey2"></div>
    <div class="info">
        <h5>movistarBlueLight60</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor grey3"></div>
    <div class="info">
        <h5>movistarBlueLight50</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor grey4"></div>
    <div class="info">
        <h5>movistarBlueLight30</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor grey5"></div>
    <div class="info">
        <h5>movistarBlueLight10</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor white"></div>
    <div class="info">
        <h5>movistarBlueLight60Percent25</h5>
        <h5>#color</h5>
    </div>
</div>
</div>


<br/><br/><br/><br/>

### Vivo
<div class="palette">
<div id="cardPalette">
    <div class="cardColor movistarBlue"></div>
    <div class="info">
        <h5>movistarBlue</h5>
        <h5>#019DF4</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueDark"></div>
    <div class="info">
        <h5>movistarBlueDark</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight60"></div>
    <div class="info">
        <h5>movistarBlueLight60</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight50"></div>
    <div class="info">
        <h5>movistarBlueLight50</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight30"></div>
    <div class="info">
        <h5>movistarBlueLight30</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight10"></div>
    <div class="info">
        <h5>movistarBlueLight10</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight60Percent25"></div>
    <div class="info">
        <h5>movistarBlueLight60Percent25</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight30Percent25"></div>
    <div class="info">
        <h5>movistarBlueLight30Percent25</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreen"></div>
    <div class="info">
        <h5>movistarGreen</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenDark"></div>
    <div class="info">
        <h5>movistarGreenDark</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenLight50"></div>
    <div class="info">
        <h5>movistarGreenLight50</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenLight30"></div>
    <div class="info">
        <h5>movistarGreenLight30</h5>
        <h5>#color</h5>
    </div>
</div>
</div>

<br/><br/><br/><br/>

### O2
<div class="palette">
<div id="cardPalette">
    <div class="cardColor movistarBlue"></div>
    <div class="info">
        <h5>movistarBlue</h5>
        <h5>#019DF4</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueDark"></div>
    <div class="info">
        <h5>movistarBlueDark</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight60"></div>
    <div class="info">
        <h5>movistarBlueLight60</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight50"></div>
    <div class="info">
        <h5>movistarBlueLight50</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight30"></div>
    <div class="info">
        <h5>movistarBlueLight30</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight10"></div>
    <div class="info">
        <h5>movistarBlueLight10</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight60Percent25"></div>
    <div class="info">
        <h5>movistarBlueLight60Percent25</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight30Percent25"></div>
    <div class="info">
        <h5>movistarBlueLight30Percent25</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreen"></div>
    <div class="info">
        <h5>movistarGreen</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenDark"></div>
    <div class="info">
        <h5>movistarGreenDark</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenLight50"></div>
    <div class="info">
        <h5>movistarGreenLight50</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenLight30"></div>
    <div class="info">
        <h5>movistarGreenLight30</h5>
        <h5>#color</h5>
    </div>
</div>
</div>

<br/><br/><br/><br/>

### Classic O2
<div class="palette">
<div id="cardPalette">
    <div class="cardColor movistarBlue"></div>
    <div class="info">
        <h5>movistarBlue</h5>
        <h5>#019DF4</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueDark"></div>
    <div class="info">
        <h5>movistarBlueDark</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight60"></div>
    <div class="info">
        <h5>movistarBlueLight60</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight50"></div>
    <div class="info">
        <h5>movistarBlueLight50</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight30"></div>
    <div class="info">
        <h5>movistarBlueLight30</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight10"></div>
    <div class="info">
        <h5>movistarBlueLight10</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight60Percent25"></div>
    <div class="info">
        <h5>movistarBlueLight60Percent25</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarBlueLight30Percent25"></div>
    <div class="info">
        <h5>movistarBlueLight30Percent25</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreen"></div>
    <div class="info">
        <h5>movistarGreen</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenDark"></div>
    <div class="info">
        <h5>movistarGreenDark</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenLight50"></div>
    <div class="info">
        <h5>movistarGreenLight50</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarGreenLight30"></div>
    <div class="info">
        <h5>movistarGreenLight30</h5>
        <h5>#color</h5>
    </div>
</div>
</div>

<br/><br/><br/><br/>

## Color Constant
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