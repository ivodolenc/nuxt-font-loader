import type { Nuxt } from '@nuxt/schema'
import type { LocalOptions } from '../types'

/**
 * Generates html tags inside `<head>` section for the local font sources.
 *
 * @since 2.0.0
 */
export const generateLocalHead = (local: LocalOptions[], nuxt: Nuxt) => {
  let fontFace = ''
  let classes = ''
  let variables = ''
  let root = ''

  for (const source of local) {
    const options = {
      weight: '400',
      display: 'optional',
      style: 'normal',
      ...source
    }
    const [, format] = options.src.split(/\.(?=[^.]+$)/)

    nuxt.options.app.head.link?.push({
      rel: 'preload',
      as: 'font',
      crossorigin: 'anonymous',
      type: `font/${format}`,
      href: options.src
    })

    const fontFamily = `font-family:"${options.family}";`
    const fontWeight = `font-weight:${options.weight};`
    const fontDisplay = `font-display:${options.display};`
    const fontStyle = `font-style:${options.style};`
    const fontSrc = `src:url('${options.src}') format('${format}');`

    if (options.class) {
      classes += `.${options.class}{${fontFamily}}`
    }

    if (options.variable) {
      variables += `--${options.variable}:"${options.family}";`
    }

    fontFace += `@font-face{${fontFamily}${fontWeight}${fontDisplay}${fontStyle}${fontSrc}}`
  }

  if (variables) {
    root += `:root{${variables}}`
  }

  const styles = `${fontFace}${classes}${root}`

  return nuxt.options.app.head.style?.push({
    children: styles
  })
}
