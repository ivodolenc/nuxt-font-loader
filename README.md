# Nuxt Font Loader

Simple, modern and lightweight font loader for Nuxt projects.

## Features

- Helps you to easily load fonts on your site
- Supports _local_ and _external_ loading strategies
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

The new `nuxt-font-loader` module brings an updated font loading strategies to your project. All customizations are now defined in the main _nuxt.config.ts_ file so it's easier to use.

Also, the module supports popular methods for loading fonts on your site. You can use the `local` method, also called `self-host`, or you can load `external` font sources directly from third-party servers, such as Google, Typekit, etc.

At the moment, the `self-host` _(i.e. local)_ method is most recommended for handling fonts. In other words, it means that you can optimally load web fonts with performance, flexibility and privacy in mind.

Download all fonts and serve them from the same _domain_ as your deployment to avoid _third-party_ server requests and potential _privacy_ issues.

## Local Strategy

Place the previously downloaded fonts in the `public/fonts/` directory and specify the path to the local font files.

The module will automatically _preload_ sources so there is no need for additional customization.

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

You can now use it in the _templates_ like this:

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

## External Strategy

To load fonts directly from third-party servers use `external` option.

The module will automatically detect servers and _preload_ sources accordingly so you don't have to worry about it.

```js
// nuxt.config.ts

{
  fontLoader: {
    external: [
      {
        src: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
        family: 'Inter',
        class: 'font-inter' // optional
      }
    ]
  }
}
```

You can now use it in the _templates_ like this:

```html
<template>
  <h1 class="font-inter">Nuxt Font Loader</h1>
</template>
```

## Module Options

Nuxt Font Loader has been completely rewritten so it's _typescript_ friendly.

It also improves the development experience with detailed descriptions, examples, and auto-hinted configuration right in the code editor.

### Defaults

```js
// nuxt.config.ts

{
  fontLoader: {
    local: [],
    external: [],
    logs: true
  }
}
```

### local

- Type: `object[]`
- Default: `[]`

An array of objects that specifies `local` font sources.

Each object is treated as a separate block of rules.

```js
// nuxt.config.ts

{
  local: [
    {
      src: '/fonts/AspektaVF.woff2',
      family: 'Aspekta Variable',
      weight: '100 900',
      class: 'font-aspekta'
    }
  ]
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

### local.fallback

- Type: `string`
- Default: `undefined`

Defines the font family fallback.

```js
{
  fallback: 'sans-serif'
}
```

Example above will generate the font fallback:

```css
.my-font {
  font-family: 'family-name', sans-serif;
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

### external

- Type: `object[]`
- Default: `[]`

An array of objects that specifies `external` font sources.

It is also possible to specify static sources from the `public/` directory.

Each object is treated as a separate block of rules.

```js
// nuxt.config.ts

{
  external: [
    {
      src: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
      family: 'Inter',
      class: 'Inter'
    }
  ]
}
```

### external.src

- Type: `string`
- Required: `true`

Specifies path to the external source.

```js
{
  src: 'path-to-external-source'
}
```

### external.family

- Type: `string`
- Default: `undefined`

Defines the font family name.

Use this in combination with the _class_ or _variable_ options.

```js
{
  family: 'Family Name',
  class: 'my-font'
}
```

### external.fallback

- Type: `string`
- Default: `undefined`

Defines the font family fallback.

```js
{
  fallback: 'sans-serif'
}
```

Example above will generate the font fallback:

```css
.my-font {
  font-family: 'family-name', sans-serif;
}
```

### external.class

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

### external.variable

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

### logs

- Type: `boolean`
- Default: `true`

Manages all terminal logs.

```js
{
  logs: true
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
