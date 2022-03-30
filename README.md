<p align="center">
    <img src=".github/assets/cover22.svg" >
</p>

<h1>Nuxt Font Loader</h1>

Simple, modern and lightweight font loader for Nuxt projects.

## Features

- Supports `all` types of font loading 🔥 (local, Google, Typekit, custom, etc.)
- Follows the best practice for `modern`, `fast` and `efficient` font loading
- Eliminates render-blocking resources and improves site performance by loading the font css asynchronously
- Includes settings for resource hints `prefetch`, `preconnect` and `preload`
- Super-easy to use without complicated settings and additional code bloat
- Minimal working configuration with just one line of code 🤯
- Tested in `dev` and `prod` mode (supports SPA & SSR)
- Automatically sets the best settings based on your `url` option
- Supports loading `multiple` font sources at the same time
- Fully `customizable` settings for advanced usage

## Quick Start

1. Install `nuxt-font-loader` dependency to your project

```bash
$ yarn add -D nuxt-font-loader # or npm i -D nuxt-font-loader
```

2. Enable `nuxt-font-loader` in the `buildModules` section

```js
// nuxt.config.js

export default {
  buildModules: ['nuxt-font-loader'],

  fontLoader: {
    /* module options */
  }
}
```

That's it! Start developing your app!

## Examples

Here are some code examples

- [Local](https://codesandbox.io/s/example-nuxt-font-loader-local-drpnf)
- [Google](https://codesandbox.io/s/example-nuxt-font-loader-google-btkvl)
- [Multiple sources](https://codesandbox.io/s/example-nuxt-font-loader-multiple-ho9ty)

### Local font loading

```js
// nuxt.config.js

export default {
  fontLoader: {
    url: '/fonts/font-face.css'
  }
}
```

```css
/* font-face.css */

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('/fonts/I-300.woff2') format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/I-400.woff2') format('woff2');
}
```

```css
/* Specify the font-family as usual */

html {
  font-family: 'Inter', sans-serif;
}
```

### Google font loading

```js
// nuxt.config.js

export default {
  fontLoader: {
    url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap',

    prefetch: true,
    preconnect: true
  }
}
```

```css
/* Specify the font family as usual */

html {
  font-family: 'Inter', sans-serif;
}
```

### Custom font loading

```js
// nuxt.config.js

export default {
  fontLoader: {
    // Paste a new custom link here (for example Typekit)
    url: 'https://use.typekit.net/xxxxxxx.css',

    prefetch: true,
    preconnect: true
  }
}
```

```css
/* Specify the font family as usual */

html {
  font-family: 'New Custom Family', sans-serif;
}
```

### Multiple sources usage example

Automatically sets the best settings based on your `url` option

```js
// nuxt.config.js

export default {
  fontLoader: {
    url: {
      local: '/fonts/font-face.css',
      google: 'https://fonts.googleapis.com/css2?family=Manrope&display=swap',
      custom: 'https://use.typekit.net/xxxxxxx.css'
    }
  }
}
```

```css
/* Specify the font family as usual */

html {
  font-family: 'Inter', sans-serif; /* Local */
}

nav {
  font-family: 'Roboto', sans-serif; /* Google */
}

h1 {
  font-family: 'New Custom Family', sans-serif; /* Custom */
}
```

### Advanced usage example

Use these methods only if you want to customize the `default` settings (optional)

```js
// nuxt.config.js

export default {
  fontLoader: {
    url: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap',

    prefetch: {
      hid: 'my-font-prefetch'
    },

    preconnect: {
      hid: 'my-font-preconnect',
      crossorigin: 'anonymous'
    },

    preload: {
      hid: 'my-font-preload'
    },

    noscript: {
      hid: 'my-font-noscript'
    }
  }
}
```

```js
// nuxt.config.js

export default {
  fontLoader: {
    url: {
      local: '/fonts/font-face.css'
    },

    preload: {
      local: {
        hid: 'my-font-preload'
      }
    },

    noscript: {
      local: {
        hid: 'my-font-noscript'
      }
    }
  }
}
```

> Following these examples, it is possible to customize all settings as needed

## Module Options

Here are all the `default` options that can be used for customization:

```js
// nuxt.config.js

export default {
  fontLoader: {
    url: {
      local: undefined,
      google: undefined,
      custom: undefined
    },
    prefetch: false,
    preconnect: false,
    preload: {},
    noscript: {},
    stylesheet: true
  }
}
```

### url

- Default: `{}`

Defines the path of the css file that includes all `@font-face` rules. **This option is required.**

### prefetch

- Default: `false`

Enable this if you request fonts from a third-party server, such as Google, Typekit, etc.

When used with multiple sources method, this is enabled by default.

```html
<link rel="dns-prefetch" href="https://fonts.gstatic.com/" />
```

[More info](https://www.w3.org/TR/resource-hints/#dns-prefetch)

### preconnect

- Default: `false`

Enable this if you request fonts from a third-party server, such as Google, Typekit, etc.

When used with multiple sources method, this is enabled by default.

```html
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
```

[More info](https://www.w3.org/TR/resource-hints/#preconnect)

### preload

- Default: `{}`

Preloads a css file to increase its priority.

```html
<link rel="preload" as="style" href="/path/to/font-face.css" />
```

[More info](https://www.w3.org/TR/preload/#introduction)

### noscript

- Default: `{}`

Provides a fallback option in case the user disables javascript.

```html
<noscript><link rel="stylesheet" href="/path/to/font-face.css" /></noscript>
```

[More info](https://www.w3schools.com/tags/tag_noscript.asp)

### stylesheet

- Default: `true`

Eliminates render-blocking effect and improves site performance by loading the font css asynchronously.

```html
<link rel="stylesheet" href="/path/to/font-face.css" />
```

## Links

- [The Fastest Google Fonts](https://csswizardry.com/2020/05/the-fastest-google-fonts/)

## License

**Nuxt Font Loader**

[MIT License](LICENSE)

Copyright (c) Ivo Dolenc
