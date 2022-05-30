#  Phiswap UIkit

[![Version](https://img.shields.io/npm/v/@phiswap-libs/uikit)](https://www.npmjs.com/package/@phiswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@pphiswap-libs/uikit)](https://www.npmjs.com/package/@phiswap-libs/uikit)

Phiswap UIkit is a set of React components and hooks used to build pages on Phi's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @phiswap-libs/uikit`

## Setup

### Theme

Before using phiswap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@phiswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@pancakeswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://phinetwork.github.io/phiswap-uikit/)
