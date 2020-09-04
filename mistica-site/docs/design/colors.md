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

<br/>

---

#### Secondary
<div class="palette">
<div id="cardPalette">
    <div class="cardColor mov-pepper"></div>
    <div class="info">
        <h5>pepper</h5>
        <h5>#019DF4</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor mov-pepperDark"></div>
    <div class="info">
        <h5>pepperDark</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor mov-pepperLight"></div>
    <div class="info">
        <h5>pepperLight</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor mov-egg"></div>
    <div class="info">
        <h5>egg</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor mov-eggLight"></div>
    <div class="info">
        <h5>eggLight</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor mov-pink"></div>
    <div class="info">
        <h5>pink</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor mov-purple"></div>
    <div class="info">
        <h5>purple</h5>
        <h5>#color</h5>
    </div>
</div>
</div>

<br/>

---

#### Neutral
<div class="palette">
<div id="cardPalette">
    <div class="cardColor mov-grey0"></div>
    <div class="info">
        <h5>grey0</h5>
        <h5>#019DF4</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor mov-grey1"></div>
    <div class="info">
        <h5>grey1</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor mov-grey2"></div>
    <div class="info">
        <h5>grey2</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor mov-grey3"></div>
    <div class="info">
        <h5>grey3</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor mov-grey4"></div>
    <div class="info">
        <h5>grey4</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor mov-grey5"></div>
    <div class="info">
        <h5>grey5</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor white"></div>
    <div class="info">
        <h5>white</h5>
        <h5>#color</h5>
    </div>
</div>
</div>

<br/>

#### Prominent
<div class="palette">
<div id="cardPalette">
    <div class="cardColor movistarProminentBlue"></div>
    <div class="info">
        <h5>movistarProminentBlue</h5>
        <h5>#019DF4</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor movistarProminentDark"></div>
    <div class="info">
        <h5>movistarProminentDark</h5>
        <h5>#color</h5>
    </div>
</div>
</div>


<br/><br/><br/><br/>

### Vivo
<div class="palette">
<div id="cardPalette">
    <div class="cardColor vivoPurple"></div>
    <div class="info">
        <h5>vivoPurple</h5>
        <h5>#019DF4</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivoPurpleDark"></div>
    <div class="info">
        <h5>vivoPurpleDark</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivoPurpleLight90"></div>
    <div class="info">
        <h5>vivoPurpleLight90</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivoPurpleLight80"></div>
    <div class="info">
        <h5>vivoPurpleLight80</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivoPurpleLight40"></div>
    <div class="info">
        <h5>vivoPurpleLight40</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivoPurpleLight20"></div>
    <div class="info">
        <h5>vivoPurpleLight20</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivoPurpleLight10"></div>
    <div class="info">
        <h5>vivoPurpleLight10</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivoGreen"></div>
    <div class="info">
        <h5>vivoGreen</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivoGreenDark"></div>
    <div class="info">
        <h5>vivoGreenDark</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivoGreenLight40"></div>
    <div class="info">
        <h5>vivoGreenLight40</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivoBlue"></div>
    <div class="info">
        <h5>vivoBlue</h5>
        <h5>#color</h5>
    </div>
</div>
</div>

---

#### Secondary
<div class="palette">
<div id="cardPalette">
    <div class="cardColor vivo-orange"></div>
    <div class="info">
        <h5>pepper</h5>
        <h5>#019DF4</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivo-orangeDark"></div>
    <div class="info">
        <h5>pepperDark</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivo-orangeLight"></div>
    <div class="info">
        <h5>pepperLight</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivo-pink"></div>
    <div class="info">
        <h5>egg</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivo-pepper"></div>
    <div class="info">
        <h5>eggLight</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivo-pepperDark"></div>
    <div class="info">
        <h5>pink</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivo-pepperLight"></div>
    <div class="info">
        <h5>purple</h5>
        <h5>#color</h5>
    </div>
</div>
</div>

<br/>

---

#### Neutral
<div class="palette">
<div id="cardPalette">
    <div class="cardColor vivo-grey0"></div>
    <div class="info">
        <h5>grey0</h5>
        <h5>#019DF4</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivo-grey1"></div>
    <div class="info">
        <h5>grey1</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivo-grey2"></div>
    <div class="info">
        <h5>grey2</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivo-grey3"></div>
    <div class="info">
        <h5>grey3</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivo-grey4"></div>
    <div class="info">
        <h5>grey4</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor vivo-grey5"></div>
    <div class="info">
        <h5>grey5</h5>
        <h5>#color</h5>
    </div>
</div>
<div id="cardPalette">
    <div class="cardColor white"></div>
    <div class="info">
        <h5>white</h5>
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