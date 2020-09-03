---
id: android
title: Android
---

[![Platform](https://img.shields.io/badge/Platform-Android-brightgreen)](https://github.com/Telefonica/mistica-android)
[![Version](https://img.shields.io/badge/Version-0.2.1-blue)](https://github.com/Telefonica/mistica-android)
[![Support](https://img.shields.io/badge/Support-%3E%3D%20Android%205.0-brightgreen)](https://github.com/Telefonica/mistica-android)
[![Kotlin version badge](https://img.shields.io/badge/kotlin-1.3-blue.svg)](https://kotlinlang.org/docs/reference/whatsnew13.html)

Mistica is a framework that contains reusable UI components and utilities.

## Instalation

Inside the dependency block in your build.gradle, add this line to add the library:

```gradle
dependencies {
    ...
    implementation 'com.telefonica.mistica:mistica:$version'
    ...
}
```

In case you also want to include also the components catalog in your application:

```gradle
dependencies {
    ...
    implementation 'com.telefonica.mistica:mistica:$version'
    implementation 'com.telefonica.mistica:mistica-catalog:$version'
    ...
}
```

## Configuration

Mistica provides an Android theme for each brand supported by telefonica.
Just set your App or any specific activity to use any of the following:

* MisticaTheme.Movistar
* MisticaTheme.Movistar.Prominent
* MisticaTheme.O2
* MisticaTheme.O2Classic
* MisticaTheme.Vivo

```xml
<manifest ...>
    <application
        ...
        android:theme="@style/MisticaTheme.Movistar" />
</manifest>
```

```xml
...
<activity
    ...
    android:theme="@style/MisticaTheme.Movistar.Prominent" />
...
```

## Components

* Buttons
* Inputs
* Snackbars
* Screen
* Load
* Pop
* Badges
* Scroll
* Tags
* Lists
* Headers
* Sections
* Chips

## Demo app

Included in this repository is a demo of currently implemented components. A full list of implemented components can be found here: Components

To see samples of all of our implemented components, run the App module in Android Studio.


## Contributing

TODO