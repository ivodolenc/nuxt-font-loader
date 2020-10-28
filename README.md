<p align="center">
    <img src=".github/assets/cover.svg" >
</p>

<h1>Nuxt Font Loader</h1>

Modern, lightweight and simple font loader for nuxt projects.

## Features

- Supports `all` types of font loading 🔥 (self-hosted, Google, Typekit, etc.)
- Follows the best practice for `modern`, `fast` and `efficient` font loading
- Eliminates render-blocking resources and improves site performance by loading the font css asynchronously
- Includes settings for resource hints `prefetch`, `preconnect` and `preload`
- Super-easy to use without complicated settings and additional code bloat
- Minimal working configuration with just one line of code 🤯
- Tested in `dev` and `prod` mode (supports SPA & SSR)

## Setup

1. Add `nuxt-font-loader` dependency to your project

```bash
$ npm install --save-dev nuxt-font-loader
```

2. Add `nuxt-font-loader` to the `buildModules` section of `nuxt.config.js`

```js
// nuxt.config.js

export default {
  buildModules: ['nuxt-font-loader'],

  fontLoader: {
    /* module options */
  }
}
```

## Examples

### Self-hosted font loading

**nuxt.config.js**

```js
{
  fontLoader: {
    // Path to your css file
    url: '/fonts/font-face.css'
  }
}
```

**font-face.css**

```css
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('/fonts/I-300.woff2') format('woff2');
  /* Consider adding a 'unicode-range' CSS descriptor */
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/I-400.woff2') format('woff2');
  /* Consider adding a 'unicode-range' CSS descriptor */
}
```

**specify families**

```css
html {
  font-family: 'Inter', sans-serif;
}
```

### Google font loading

**nuxt.config.js**

```js
{
  fontLoader: {
    // Paste a google link here
    url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',

    // Enable 'prefetch' and 'preconnect' options
    prefetch: true,
    preconnect: true
  }
}
```

**specify families**

```css
html {
  font-family: 'Roboto', sans-serif;
}
```

### Custom font loading

**nuxt.config.js**

```js
{
  fontLoader: {
    // Paste a new custom link here
    url: 'https://new-custom-link/',

    // Adjust the settings to your needs
    prefetch: {
      hid: 'custom-prefetch',
      rel: 'dns-prefetch',
      href: 'https://new-custom-link/'
    },
    preconnect: {
      hid: 'custom-preconnect',
      rel: 'preconnect',
      href: 'https://new-custom-link/',
      crossorigin: ''
    },
    preload: {
      hid: 'custom-preload',
      rel: 'preload',
      as: 'style',
      href: 'https://new-custom-link/'
    },
    noscript: {
      hid: 'custom-noscript',
      innerHTML: `<link rel="stylesheet" href="https://new-custom-link/">`
    }
  }
}
```

**specify families**

```css
html {
  font-family: 'New Custom Family', sans-serif;
}
```

## Options

**All default options**

```js
// nuxt.config.js

{
  fontLoader: {
    url: null,
    prefetch: false,
    preconnect: false,
    preload: true,
    stylesheet: true,
    noscript: true
  }
}
```

### `url`

- Default: `null`

Defines the path of the css file that includes all @font-face rules.

> This option is required.

### `prefetch`

- Default: `false`

Enable this if you request fonts from a third-party server, such as Google, etc.

```html
<link rel="dns-prefetch" href="https://fonts.gstatic.com/" />
```

[More info](https://www.w3.org/TR/resource-hints/#dns-prefetch)

### `preconnect`

- Default: `false`

Enable this if you request fonts from a third-party server, such as Google, etc.

```html
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
```

[More info](https://www.w3.org/TR/resource-hints/#preconnect)

### `preload`

- Default: `true`

Preloads a css file to increase its priority.

```html
<link rel="preload" as="style" href="/path/to/font-face.css" />
```

[More info](https://www.w3.org/TR/preload/#introduction)

### `stylesheet`

- Default: `true`

Eliminates render-blocking effect and improves site performance by loading the font css asynchronously.

```html
<link rel="stylesheet" href="/path/to/font-face.css" />
```

### `noscript`

- Default: `true`

Provides a fallback option in case the user disables javascript.

```html
<noscript><link rel="stylesheet" href="/path/to/font-face.css" /></noscript>
```

[More info](https://www.w3schools.com/tags/tag_noscript.asp)

## Links

- [The Fastest Google Fonts](https://csswizardry.com/2020/05/the-fastest-google-fonts/)
- [The Simplest Way to Load CSS Asynchronously](https://www.filamentgroup.com/lab/load-css-simpler/)

## License

[MIT License](LICENSE)

Copyright (c) Ivo Dolenc
