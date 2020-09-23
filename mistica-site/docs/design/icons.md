---
id: icons
title: Icons
---

import * as Icons from '@telefonica/mistica/dist/generated/mistica-icons'


**Constants** are transverse values that we apply to the different elements of the interface, which do not change and which mean the same from one brand to another. In turn, these constants have an associated variable.

**Variables** are a group of color names that function as properties, which differ in each of the brands and which are associated with a set of values that are defined as a hex/RGBA color.

<br/>

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
            {Icons.map(Icon, index =>
                <Icon key={index} size={24} />
            )}
        </div>
    )}
</div>