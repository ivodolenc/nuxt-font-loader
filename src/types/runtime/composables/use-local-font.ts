import type { LocalOptions } from '../../options/index.js'

/**
 * Loads fonts from the same domain as your deployment.
 *
 * At the moment, this is the most recommended method for handling fonts.
 *
 * @example
 *
 * ```js
 * useLocalFont([
 *     {
 *       src: '/fonts/AspektaVF.woff2',
 *       family: 'Aspekta Variable',
 *       weight: '100 900'
 *     }
 * ])
 * ```
 *
 * @since 2.2.0
 */
export declare const useLocalFont: (local: LocalOptions[]) => any
