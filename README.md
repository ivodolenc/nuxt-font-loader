<h1 align="center">Nuxt Font Loader</h1>

<p align="center">Simple, modern and lightweight font loader for Nuxt projects.</p>

## Features

- Helps you to easily load fonts on your site
- Follows modern methods and practices
- Updated to Nuxt 3 Stable
- TypeScript friendly
- Super-easy to use

## Quick Start

1. Install `nuxt-font-loader` to your project

```sh
npm i -D nuxt-font-loader
```

2. Enable `nuxt-font-loader` via the `modules` option

```js
// nuxt.config.ts

{
  modules: ['nuxt-font-loader'],

  fontLoader: {
    local: [
      {
        src: '/new-font.woff2',
        family: 'Family Name'
      }
    ]
  }
}
```

That's it! Start developing your app!

## Font Loading

The new `nuxt-font-loader` module brings an updated font loading system to your project. All customizations are now defined in the main `nuxt.config.ts` file so it's easier to use.

At the moment, the `self-host` method is most recommended for handling fonts. In other words, it means that you can optimally load web fonts with performance, flexibility and privacy in mind.

Download all fonts and serve them from the same _domain_ as your deployment to avoid _third-party_ server requests and potential _privacy_ issues.

## Usage

Place the previously downloaded fonts in the `public/fonts/` directory.

The `local` option accepts an array of objects so you can specify as many fonts as you like.

Here are simple example:

```js
// nuxt.config.ts

{
  fontLoader: {
    local: [
      {
        src: '/fonts/Aspekta.woff2',
        family: 'Aspekta',
        class: 'font-aspekta' // optional
      }
    ]
  }
}
```

That's it! You can now use it in the _templates_ like this:

```html
<template>
  <h1 class="font-aspekta">Nuxt Font Loader</h1>
</template>
```

### Multiple sources

```js
// nuxt.config.ts

{
  fontLoader: {
    local: [
      {
        src: '/fonts/Aspekta-300.woff2',
        family: 'Aspekta',
        weight: '300'
      },
      {
        src: '/fonts/Aspekta-400.woff2',
        family: 'Aspekta',
        weight: '400'
      },
      {
        src: '/fonts/Aspekta-500.woff2',
        family: 'Aspekta',
        weight: '500'
      }
    ]
  }
}
```

## Module Options

The module has been completely rewritten so it's _typescript_ friendly.

It also improves the development experience with detailed descriptions, examples, and auto-hinted configuration right in the code editor.

### Defaults

```js
// nuxt.config.ts

{
  fontLoader: {
    local: []
  }
}
```

### local

- Type: `object[]`
- Default: `[]`

An array of objects that specifies local font sources. Each object is treated as a separate block of rules.

```js
// nuxt.config.ts

{
  fontLoader: {
    local: [
      {
        src: '/fonts/AspektaVF.woff2',
        family: 'Aspekta Variable',
        weight: '100 900',
        class: 'font-aspekta'
      }
    ]
  }
}
```

### local.src

- Type: `string`
- Required: `true`

Specifies path to the font file.

```js
{
  src: '/path/to/font.woff2'
}
```

### local.family

- Type: `string`
- Required: `true`

Defines the font family name.

```js
{
  family: 'Family Name'
}
```

### local.weight

- Type: `string`
- Default: `400`

Defines the font weight.

```js
{
  // static weight
  weight: '300'
}
```

```js
{
  // variable weight range
  weight: '100 900'
}
```

### local.display

- Type: `string`
- Default: `optional`
- Auto-hinted

Specifies how a font face is displayed.

```js
{
  display: 'swap'
}
```

### local.style

- Type: `string`
- Default: `normal`
- Auto-hinted

Defines the font style.

```js
{
  style: 'normal'
}
```

### local.class

- Type: `string`
- Default: `undefined`

Defines the global css _class_ for the current source.

```js
{
  class: 'my-font'
}
```

Example above will generate global css class:

```css
.my-font {
  font-family: 'family-name';
}
```

So it can be used in templates:

```html
<h1 class="my-font">Font Loader</h1>
```

### local.variable

- Type: `string`
- Default: `undefined`

Defines the global css _variable_ for the current source.

```js
{
  variable: 'my-font'
}
```

Example above will generate global css variable:

```css
:root {
  --my-font: 'family-name';
}
```

So it can be used in templates:

```css
h1 {
  font-family: var(--my-font);
}
```

## Show Support

This is a free and open source project available to everyone. If you like it, `leave a star` to show your support.

### Starring a repository

Navigate to the top-right corner of the page and click the <kbd>☆ Star</kbd> button.

## License

### Nuxt Font Loader

[MIT License](LICENSE)

Copyright © Ivo Dolenc

Developed in Croatia 🇭🇷
