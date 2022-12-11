import { useHead } from '#app'
import { generateStyles } from '../utils'
import type { ExternalOptions } from '../../types'

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
export const useExternalFont = (external: ExternalOptions[]) => {
  const { classes, root } = generateStyles(external)
  const styles = `${classes}${root}`
  const links: object[] = []

  let google = false
  let typekit = false

  for (const font of external) {
    if (font.src.includes('google') && !google) {
      google = true

      links.push(
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          crossorigin: 'anonymous',
          href: 'https://fonts.gstatic.com'
        }
      )
    }

    if (font.src.includes('typekit') && !typekit) {
      typekit = true

      links.push({
        rel: 'preconnect',
        crossorigin: 'anonymous',
        href: 'https://use.typekit.net'
      })
    }

    links.push(
      {
        rel: 'preload',
        as: 'style',
        href: font.src
      },
      {
        rel: 'stylesheet',
        href: font.src
      }
    )
  }

  useHead({ link: links })

  if (styles) return useHead({ style: [{ children: styles }] })
}
