import { parseFormat } from './parse-format'
import type { LocalOptions, ExternalOptions } from '../types/options'

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
      ...font,
    }
    const { src, family, fallback, weight, style, display } = options
    const { class: _class, variable } = options
    const { unicode } = options as LocalOptions

    let unicodes = ''
    const format = parseFormat(src, true)
    const fb = fallback ? `,${fallback}` : ''

    const faceRules = [
      `font-family:"${family}";`,
      `font-weight:${weight};`,
      `font-style:${style};`,
      `font-display:${display};`,
      `src:url('${src}') format('${format}');`,
    ].join('')

    if (unicode) unicodes = `unicode-range:${unicode};`
    if (_class) classes += `.${_class}{font-family:"${family}"${fb};}`
    if (variable) variables += `--${variable}:"${family}"${fb};`

    fontFace += `@font-face{${faceRules}${unicodes}}`
  }

  if (variables) root += `:root{${variables}}`

  return {
    fontFace,
    classes,
    root,
  }
}
