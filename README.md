# Nuxt Font Loader

Simple, modern and lightweight font loader for Nuxt.

## Features

- Helps you to easily load fonts on your site
- Supports _local_ and _external_ loading
- Provides _font composables_
- Follows modern methods and practices
- Designed for Nuxt 3+
- TypeScript friendly
- Super easy to use
- No dependencies

## Size Info

<h6>Zero-dependencies — Tree-shakeable</h6>

<table>
  <thead>
    <tr>
      <th align="left" width="500px">Core</th>
      <th align="left" width="500px">Size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>module</td>
      <td><code>~2kB</code> minified</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th align="left" width="500px">Composables</th>
      <th align="left" width="500px">Size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>useLocalFont</td>
      <td><code>~1.1kB</code> minified</td>
    </tr>
    <tr>
      <td>useExternalFont</td>
      <td><code>~1.28kB</code> minified</td>
    </tr>
  </tbody>
</table>

## Quick Start

1. Install `nuxt-font-loader` to your project

```sh
npm i -D nuxt-font-loader
```

2. Enable the module in the main config file

```js
// nuxt.config.ts

{
  modules: ['nuxt-font-loader'],

  fontLoader: {
    local: [
      {
        src: '/new-font.woff2',
        family: 'Family Name',
        class: 'font-new-font'
      }
    ]
  }
}
```

That's it! Start developing your app!

## Optimization

The `nuxt-font-loader` brings an updated font loading strategies to your project. It automatically optimizes all your font sources and improves page loading speed.

Depending on the strategy, either `local` or `external`, the module adds _preconnect_ and _preload_ link tags to the `<head>` section with minified inline styles for `@font-face` rules.

So you don't have to worry about optimization at all since the module will do all the work under the hood.

## Font Composables

The module also provides custom functions designed to load fonts on a specific page only.

Using this composables, the font sources will not be loaded globally, but only on the page from which the function is called.

This can be super useful if you want to change fonts for different _pages_ or _layouts_.

By default, _font composables_ are not automatically imported since they are optional, but you can enable this via module option.

```js
// nuxt.config.ts

{
  fontLoader: {
    autoImport: true // enables auto-import feature
  }
}
```

If enabled, you can use _font composables_ across your application without explicitly importing them.

## Local Strategy

Loads fonts from the same domain as your deployment.

At the moment, this is the most recommended method for handling fonts. You can optimally load fonts with _performance_, _flexibility_ and _privacy_ in mind.

Also, try to use _variable_ fonts whenever you can to take advantage of their customization and fast loading speed.

In addition, check out [Nuxt Fonty](https://github.com/ivodolenc/nuxt-fonty), a much lighter version with the same API.

### Global Settings

Place the previously downloaded fonts in the `public/fonts/` directory and specify the path to the local font files.

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

You can now use it in the _templates_ like this:

```html
<template>
  <h1 class="font-aspekta">Nuxt Font Loader</h1>
</template>
```

### Font Composable

Import the function where you need it.

```html
<!-- index.vue -->

<template>
  <h1 class="font-aspekta">Nuxt Font Loader</h1>
</template>

<script setup lang="ts">
  import { useLocalFont } from '#font-loader'

  useLocalFont([
    {
      src: '/fonts/AspektaVF.woff2',
      family: 'Aspekta Variable',
      weight: '100 900',
      class: 'font-aspekta'
    }
  ])
</script>
```

## External Strategy

Loads fonts directly from third-party servers, such as Google, Typekit, etc.

### Global Settings

Specify the full url to external font sources and adjust other options as needed.

```js
// nuxt.config.ts

{
  fontLoader: {
    external: [
      {
        src: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
        family: 'Inter',
        class: 'font-inter'
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

### Font Composable

Import the function where you need it.

```html
<!-- index.vue -->

<template>
  <h1 class="font-inter">Nuxt Font Loader</h1>
</template>

<script setup lang="ts">
  import { useExternalFont } from '#font-loader'

  useExternalFont([
    {
      src: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
      family: 'Inter',
      class: 'font-inter'
    }
  ])
</script>
```

## Options

Nuxt Font Loader has been completely rewritten so it's _TypeScript_ friendly.

It also improves the development experience with detailed descriptions, examples, and auto-hinted configuration right in the code editor.

### Defaults

```js
// nuxt.config.ts

{
  fontLoader: {
    local: [],
    external: [],
    autoImport: false
  }
}
```

## local

- Type: `object[]`
- Default: `[]`

An array of objects that specifies `local` font sources.

Each object is treated as a separate block of rules.

```js
// nuxt.config.ts

{
  fontLoader: {
    local: [
      {
        src: '/fonts/AspektaVF.woff2',
        family: 'Aspekta Variable',
        weight: '100 900',
        class: 'font-aspekta' // optional
      }
    ]
  }
}
```

### preload

- Type: `boolean`
- Default: `true`

Specifies the _preload_ links.

```js
{
  preload: true
}
```

### src

- Type: `string`
- Required: `true`

Specifies path to the font file.

```js
{
  src: '/path/to/font.woff2'
}
```

### family

- Type: `string`
- Required: `true`

Defines the font family name.

```js
{
  family: 'Family Name'
}
```

### fallback

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

### weight

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

### display

- Type: `string`
- Default: `optional`
- Auto-hinted

Specifies how a font face is displayed.

```js
{
  display: 'swap'
}
```

### style

- Type: `string`
- Default: `normal`
- Auto-hinted

Defines the font style.

```js
{
  style: 'normal'
}
```

### class

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

### variable

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

### unicode

- Type: `string[]`
- Default: `undefined`

Defines a specific range of characters to be used from the font.

```js
{
  preload: false, // disables the preload link
  display: 'swap', // or 'fallback', 'auto' ...
  unicode: ['U+26']
}
```

Example above will generate:

```css
@font-face {
  font-display: swap;
  unicode-range: U+26;
}
```

## external

- Type: `object[]`
- Default: `[]`

An array of objects that specifies `external` font sources.

It is also possible to specify static sources from the `public/` directory.

Each object is treated as a separate block of rules.

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

### src

- Type: `string`
- Required: `true`

Specifies path to the external source.

```js
{
  src: 'path-to-external-source'
}
```

### family

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

### fallback

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

### class

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

### variable

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

## autoImport

- Type: `boolean`
- Default: `false`

Manages the built-in `auto-import` feature.

If enabled, you can use _font composables_ across your application without explicitly importing them.

```js
// nuxt.config.ts

{
  fontLoader: {
    autoImport: true
  }
}
```

## Support

This is a free and open source project available to everyone.

If you like it, _star the repo_ to show your support.

## License

Developed in Croatia 🇭🇷

[MIT License](LICENSE)

© Ivo Dolenc
