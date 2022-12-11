/**
 * Local Options.
 *
 * @since 2.0.0
 */
export interface LocalOptions {
  /**
   * Specifies path to the font file.
   *
   * @note `required` option
   */
  src: string
  /**
   * Defines the font family name.
   *
   * @note `required` option
   */
  family: string
  /**
   * Defines the font family fallback.
   *
   * @example
   *
   * ```js
   * {
   *   fallback: 'sans-serif'
   * }
   * ```
   *
   * Example above will generate the font fallback:
   *
   * ```css
   * .my-font { font-family: "family-name", sans-serif; }
   * ```
   *
   * @default undefined
   */
  fallback?: string
  /**
   * Defines the font weight.
   *
   * @example
   *
   * ```js
   * // static weight
   * weight: '300'
   *
   * // variable weight range
   * weight: '100 900'
   * ```
   *
   * @default '400'
   */
  weight?: string
  /**
   * Specifies how a font face is displayed.
   *
   * @default 'optional'
   */
  display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
  /**
   * Defines the font style.
   *
   * @default 'normal'
   */
  style?: 'normal' | 'italic' | 'oblique'
  /**
   * Defines the global css `class` for the current source.
   *
   * @example
   *
   * ```js
   * {
   *   class: 'my-font'
   * }
   * ```
   *
   * Example above will generate global css class:
   *
   * ```css
   * .my-font { font-family: "family-name"; }
   * ```
   *
   * So it can be used in templates:
   *
   * ```html
   * <h1 class="my-font">Font Loader</h1>
   * ```
   *
   * @default undefined
   */
  class?: string
  /**
   * Defines the global css `variable` for the current source.
   *
   * @example
   *
   * ```js
   * {
   *   variable: 'my-font'
   * }
   * ```
   *
   * Example above will generate global css variable:
   *
   * ```css
   * :root { --my-font: "family-name"; }
   * ```
   *
   * So it can be used in templates:
   *
   * ```css
   * h1 {
   *   font-family: var(--my-font);
   * }
   * ```
   *
   * @default undefined
   */
  variable?: string
}
