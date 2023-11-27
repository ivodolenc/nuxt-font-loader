import { useHead } from '#imports'
import { generateStyles, parseFormat } from '../../utils/index.js'
import type { LocalOptions } from '../../types/options/index.js'

export const useLocalFont = (local: LocalOptions[]) => {
  const { fontFace, classes, root } = generateStyles(local)
  const styles = `${fontFace}${classes}${root}`
  const links: object[] = []

  for (const font of local) {
    const options = {
      preload: true,
      ...font,
    }
    const { src } = options

    if (options.preload) {
      const format = parseFormat(src)

      if (!links.some((v: { href?: string }) => v.href === src)) {
        links.push({
          rel: 'preload',
          as: 'font',
          type: `font/${format}`,
          crossorigin: 'anonymous',
          href: src,
        })
      }
    }
  }

  if (links.length) useHead({ link: links })

  return useHead({ style: [{ children: styles }] })
}
