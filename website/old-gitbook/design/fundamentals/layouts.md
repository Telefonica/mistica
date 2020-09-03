# Layouts

## ¿Qué son layouts?

Los layouts son estructuras de espacios que ayudan a distribuir los componentes en diferentes pantallas.

## ¿Para qué sirven los layouts?

El objetivo de un layout es marcar el ritmo vertical en la distribución de los componentes en la pantalla y proporcionando consistencia en las pantallas de todos los productos que utilizan nuestro sistema de diseño. Tanto en diseño como en desarrollo ayudará a construir pantalla de manera más ágil.

## ¿Cómo se utilizan?

Un layout está formado por diferentes tipos de espacios.

1. Espacio exterior al contenedor del layout
2. Espacio entre bloques dentro del contenedor
3. Espacio entre elementos dentro de un bloque

![](../img/image%20%281%29.png)

### \[LVL 1\] Espacio exterior del contenedor

Llamamos “contenedor del layout” a todo el grupo de bloques y componentes donde se le está aplicando el layout. Por ejemplo, en esta pantalla, estamos aplicando el layout a la zona con fondo blanco.

![](https://lh6.googleusercontent.com/ZofcM4GyHGhmMCi5ebxdbRD2wkhz86HFl2zph_10RARksCiIILwK8Q7rmoDyWRiZwaXi8yGkxMY6055km9lgWuuhE_Eqnewme_k3663MzJm4G37qKzCXMsWksF3FsroOVVlqn5gM)

Éste área tiene por defecto unos espacios asignados, que como se ha explicado anteriormente, ayudarán a que los componentes se coloquen creando ese ritmo vertical.

El primer espacio que tendrá este contenedor es el espacio que separa el primer componente que metamos con elementos que no formen parte de este contenedor por la parte superior. Del mismo modo, tendremos el mismo espacio en la parte inferior, para que ningún componente se pegue a la parte inferior de la pantalla y por ejemplo, “choque” con una TabBar.

{% hint style="info" %}
Este espacio, es definido en desarrollo como **&lt;Box&gt;** y podría ser entendido como un margen del contenedor
{% endhint %}

![](https://lh6.googleusercontent.com/LlRETl4xCZL0t9wOcGIInRnJnxj1W-LgYR3jo03hhGf6kif8ufxXyxyF_KCQLuUq2_0SvkoAsA6d8RsOMeguT9sLnANYwRZRO7jzr8LlLfU7HvO6NCpk-Ooo6-o89COZQFIbPbvS)

En este punto, si metemos un componente, se distanciará de la navbar.

![](https://lh3.googleusercontent.com/duxem9hNofReJk5C-8LNU3m3S6oGg1zfqWTjNpxCPyM0iv6aKviB-BBvZJgQVir-YHRpknKfy5C4fS_mOpyGkHDHT1A-QEH0LKYen_zIffeKTgsVGqCbghYOvu-V68abBV2wy9ZV)

En cuanto metemos este primer componente, automáticamente se nos genera lo que vamos a llamar a partir de ahora **BLOQUE.**

![](https://lh6.googleusercontent.com/MAZq7A_J1FPLUzcwvtrbKa44OJnFLRbMbebUOPVeg-q8llSCSRkKSdINqUIMFPnXlgLHOof7R6PfTff-fQOXtcZvYVhwCxTCauxyt8u5DMkWFoih8W5KKlV5Q4WrBu4ZfQcmfc7M)

Un **Bloque** es simplemente un grupo de componentes relacionados y agrupados entre sí.

Al meter un segundo componente se pueden tomar 2 decisiones.

**Meterlo dentro del mismo bloque que el componente que acabamos de meter**

![](https://lh6.googleusercontent.com/BvmCxnhiZJkQITrDK-GtySLBewPX4lxO36l7bTeyxLHsul8hIzLAhmcmemoehDSfQ72voZLfTHQJHHh_Qtr0qyIZS21jiYfKk-_ZRj9TbHGXnFHNFFF2zcIZYnGQYUmfECoCKIUX)

**Meterlo como un bloque diferente.**

![](https://lh4.googleusercontent.com/1JhWHj_XU2Av86kXRrWOnB9CnM8KkToi_mVBnKltXDwkCf5q2U4lll1tWM_rgDWyGxa-5uAPbbaPIps53cUc5dYABK22f5nxuyKSsCZLOEhn5JF5kzcoYeAzs5zuzqdC7gfbWIE_)

Ésta decisión es importante, porque dependiendo de cómo se organicen las pantalla, los componentes se distanciarán más o menos entre ellos, esto ayudará al usuario en la organización de información en la interfaz.

### \[LVL 2\] Espacios entre bloques

El espacio entre bloques sería la distancia visual entre diferentes bloques \(Bloque A - Bloque B\). El espaciado entre bloques será siempre de 32px, y no podrá ser modificado.

{% hint style="info" %}
Un diseñador o diseñadora podrá hacer cuantos bloques necesite sin importar el número de componentes dentro de cada bloque.
{% endhint %}

![](https://lh6.googleusercontent.com/8d2Ylrp-6rEbVC8lC73KE_02gzQGiR9aS-_uBORG8XCSU4jz9uK_cgoixgKwWOf4Lt-Jk_MZyFVJcBUjxFzTWWMh2S8pXdolhTdX0-Y690q4cgelNBXetqxwcozuqZxmsBvtJxeJ)

{% hint style="info" %}
A este espacio entre elementos, en desarrollo se le conoce con la etiqueta **&lt;Stack&gt;**
{% endhint %}

### \[LVL 3\] **Espacio entre elementos dentro de un bloque**

Los elementos que se encuentran dentro de un bloque tendrán a su vez unos espacios definidos entre ellos. Volviendo al ejemplo de 1 solo bloque con dos componentes en su interior.

![](https://lh6.googleusercontent.com/BvmCxnhiZJkQITrDK-GtySLBewPX4lxO36l7bTeyxLHsul8hIzLAhmcmemoehDSfQ72voZLfTHQJHHh_Qtr0qyIZS21jiYfKk-_ZRj9TbHGXnFHNFFF2zcIZYnGQYUmfECoCKIUX)

Cada componente que esté dentro de un bloque se separará 16px entre componente y componente

![](https://lh3.googleusercontent.com/WN0gkgDTjsQCiAYV11kWPCLjhT2kZZbtQuEfQF9kHmnkiaEiC4tkGSioyoFXHqqv6NyrDR4aYJlnW8-ZtY9o8KGmB1KFoEhgXFqIWzBTSoeqENLhHaVxw_iNJAthNqZiGYLqczxy)

### Resumen

* Distancia del contenedor por arriba y por debajo **24px**
* Distancia entre bloques **32px**
* Distancia entre componentes dentro de un bloque **16px**

Hasta aquí, la definición por defecto de layouts.

## Layouts en Desktop

Aplicaremos la misma definición de "niveles" que hemos explicado [anteriormente](https://app.gitbook.com/@tef-novum/s/novum/design/fundamentals/layouts#como-se-utilizan).

Solo cambiarán las distancias relativas a cada elemento.

* Distancia del contenedor por arriba es de **40px** y por debajo de **80px**
* Distancia entre bloques **56px**
* Distancia entre componentes dentro de un bloque **24px**

## Otros recursos

{% tabs %}
{% tab title="Zeplin" %}
[Zeplin con las especificaciones técnicas](https://app.zeplin.io/project/5d653c69f828bf7299c551c1/screen/5f1e9e3eab9a393acc54f8fa/)
{% endtab %}

{% tab title="Origami layout exercise" %}
En este archivo de Origami, se puede ver como funciona un layout de manera automática.

{% file src="../img/layout \(1\).zip" caption="Origami file with layout" %}
{% endtab %}
{% endtabs %}

