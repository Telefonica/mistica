---
id: icons
title: Icons
---

<!-- 
import {ThemeContextProvider} from '@telefonica/mistica';
import * as Icons from '@telefonica/mistica/dist-es/generated/mistica-icons';

<div class="iconBlock">
    <ThemeContextProvider
        theme={{
            skin: 'Movistar',
            i18n: {locale: 'es-ES'},
        }}
    >
        {Object.keys(Icons).map((name, index) => {
            const Icon = Icons[name];
            return (
                <div class="iconModule" key={index}>
                    <Icon size={32} alt={name} />         
                </div>
            );
        })}
    </ThemeContextProvider>
</div> -->

<!-- <h5 id={name}>{name}</h5> -->

Desde Mística damos soporte a los iconos que se trabajaron desde el equipo de marca global para todos los productos de Telefónica. Para esto lo que hemos creado ha sido una librería para diseño (disponible desde [Mística Manager](start-using.md) y otra librería en desarrollo (web) [mistica-icons](https://github.com/Telefonica/mistica-icons).

![](../img/misticaIcons.png)

Esta librería cuenta con aproximadamente unos 400 iconos en diferentes estilos Light, Regular y Filled. Esto hace un total de 1.200 iconos disponibles para usar en todos los productos de Telefónica. Para conocer mejor el uso de los diferentes pesos puedes consultar las guidelines que hay en [Brand Factory](https://brandfactory.telefonica.com/document/1086#/nuestra-identidad/iconos).

:::note
* En dispositivos móviles usaremos el estilo **light** para tamaños de **64px o más**.
* En dispositivos móviles usaremos el estilo **regular** para tamaños **menores de 64px**.
* El estilo filled se usa en aquellos dispositivos que la calidad de renderizado sea inferior, por ejemplo, en televisión.
:::


---

## Pending
* hablar de contribución
* cuando hablamos de otra librería de desarrollo y enlazamos a mistica icons habría que meter en el repo de mistica icons la documentación necesario para el uso de iconos para desarrolladores o enlaces y demás.