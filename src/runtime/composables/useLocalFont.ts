import { useHead } from '#app'
import { generateStyles, parseFormat } from '../utils'
import type { LocalOptions } from '../../types'

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
export const useLocalFont = (local: LocalOptions[]) => {
  const { fontFace, classes, root } = generateStyles(local)
  const styles = `${fontFace}${classes}${root}`
  const links: object[] = []

  for (const font of local) {
    const format = parseFormat(font.src)

    links.push({
      rel: 'preload',
      as: 'font',
      type: `font/${format}`,
      crossorigin: 'anonymous',
      href: font.src
    })
  }

  useHead({ link: links })

  return useHead({ style: [{ children: styles }] })
}
