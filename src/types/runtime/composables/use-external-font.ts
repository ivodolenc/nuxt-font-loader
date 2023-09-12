import type { ExternalOptions } from '../../options'

/**
 * Loads fonts directly from third-party servers.
 *
 * @example
 *
 * ```js
 * useExternalFont([
 *     {
 *       src: 'path-to-external-source'
 *     }
 * ])
 * ```
 *
 * @since 2.2.0
 */
export declare const useExternalFont: (external: ExternalOptions[]) => any
