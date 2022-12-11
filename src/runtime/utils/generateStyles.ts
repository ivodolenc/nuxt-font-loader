import { parseFormat } from './parseFormat'
import type { LocalOptions, ExternalOptions } from '../../types'

/**
 * Generates head styles from options entered by the user.
 *
 * @since 2.2.0
 */
export const generateStyles = (fonts: LocalOptions[] | ExternalOptions[]) => {
  let fontFace = ''
  let classes = ''
  let root = ''
  let variables = ''

  for (const font of fonts) {
    const options = {
      weight: '400',
      display: 'optional',
      style: 'normal',
      ...font
    }

    const srcFormat = parseFormat(options.src)
    let format = srcFormat
    if (srcFormat === 'ttf') format = 'truetype'
    else if (srcFormat === 'otf') format = 'opentype'

    const fontFallback = options.fallback ? `,${options.fallback}` : ''
    const fontFamily = `font-family:"${options.family}";`
    const fontWeight = `font-weight:${options.weight};`
    const fontDisplay = `font-display:${options.display};`
    const fontStyle = `font-style:${options.style};`
    const fontSrc = `src:url('${options.src}') format('${format}');`

    if (options.class)
      classes += `.${options.class}{font-family:"${options.family}"${fontFallback};}`

    if (options.variable)
      variables += `--${options.variable}:"${options.family}"${fontFallback};`

    fontFace += `@font-face{${fontFamily}${fontWeight}${fontDisplay}${fontStyle}${fontSrc}}`
  }

  if (variables) root += `:root{${variables}}`

  return {
    fontFace,
    classes,
    root
  }
}
