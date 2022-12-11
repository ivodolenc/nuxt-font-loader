import type { LocalOptions, ExternalOptions } from './index'

/**
 * Module Options.
 *
 * @since 2.0.0
 */
export interface ModuleOptions {
  /**
   * An array of objects that specifies `local` font sources.
   *
   * Each object is treated as a separate block of rules.
   *
   * @example
   *
   * ```js
   * {
   *   local: [
   *     {
   *       src: '/fonts/AspektaVF.woff2',
   *       family: 'Aspekta Variable',
   *       weight: '100 900'
   *     }
   *   ]
   * }
   * ```
   *
   * @default []
   *
   * @since 2.0.0
   *
   * @see [Aspekta Typeface](https://github.com/ivodolenc/aspekta)
   */
  local?: LocalOptions[]
  /**
   * An array of objects that specifies `external` font sources.
   *
   * It is also possible to specify static sources from the `public/` directory.
   *
   * Each object is treated as a separate block of rules.
   *
   * @example
   *
   * ```js
   * {
   *   external: [
   *     {
   *       src: 'path-to-external-source'
   *     }
   *   ]
   * }
   * ```
   *
   * @default []
   *
   * @since 2.1.0
   */
  external?: ExternalOptions[]
  /**
   * Manages the built-in `auto-import` feature.
   *
   * If enabled, you can use `font composables` across your application without explicitly importing them.
   *
   * @since 2.2.0
   */
  autoImport?: boolean
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    /**
     * Nuxt Font Loader
     *
     * Simple, modern and lightweight font loader for Nuxt.
     *
     * @see [source](https://github.com/ivodolenc/nuxt-font-loader)
     */
    fontLoader?: ModuleOptions
  }
  interface NuxtOptions {
    /**
     * Nuxt Font Loader
     *
     * Simple, modern and lightweight font loader for Nuxt.
     *
     * @see [source](https://github.com/ivodolenc/nuxt-font-loader)
     */
    fontLoader?: ModuleOptions
  }
}
