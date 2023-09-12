import { useHead } from '#imports'
import { generateStyles } from '../../utils'
import type { ExternalOptions } from '../../types/options'

export const useExternalFont = (external: ExternalOptions[]) => {
  const { classes, root } = generateStyles(external)
  const styles = `${classes}${root}`
  const links: object[] = []

  let google = false
  let typekit = false

  for (const font of external) {
    const { src } = font

    if (src.includes('google') && !google) {
      google = true

      links.push(
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          crossorigin: 'anonymous',
          href: 'https://fonts.gstatic.com',
        },
      )
    }

    if (src.includes('typekit') && !typekit) {
      typekit = true

      links.push({
        rel: 'preconnect',
        crossorigin: 'anonymous',
        href: 'https://use.typekit.net',
      })
    }

    links.push(
      {
        rel: 'preload',
        as: 'style',
        href: src,
      },
      {
        rel: 'stylesheet',
        href: src,
      },
    )
  }

  useHead({ link: links })

  if (styles) return useHead({ style: [{ children: styles }] })
}
