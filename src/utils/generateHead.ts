import type { Nuxt } from '@nuxt/schema'
import type { LocalOptions, ExternalOptions } from '../types'

/**
 * Generates html tags inside `<head>` section for the `local` font sources.
 *
 * @since 2.0.0
 */
export const generateLocalHead = (local: LocalOptions[], nuxt: Nuxt) => {
  let fontFace = ''
  let classes = ''
  let root = ''
  let variables = ''

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

  const styles = `${fontFace}${classes}${root}`

  return nuxt.options.app.head.style?.push({ children: styles })
}

/**
 * Generates html tags inside `<head>` section for the `external` font sources.
 *
 * @since 2.1.0
 */
export const generateExternalHead = (
  external: ExternalOptions[],
  nuxt: Nuxt
) => {
  let google = false
  let typekit = false
  let classes = ''
  let root = ''
  let variables = ''

  for (const source of external) {
    const options = {
      ...source
    }

    if (options.src.includes('google') && !google) {
      google = true

      nuxt.options.app.head.link?.push({
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      })
      nuxt.options.app.head.link?.push({
        rel: 'preconnect',
        crossorigin: 'anonymous',
        href: 'https://fonts.gstatic.com'
      })
    }

    if (options.src.includes('typekit') && !typekit) {
      typekit = true

      nuxt.options.app.head.link?.push({
        rel: 'preconnect',
        crossorigin: 'anonymous',
        href: 'https://use.typekit.net'
      })
    }

    nuxt.options.app.head.link?.push({
      rel: 'preload',
      as: 'style',
      href: options.src
    })
    nuxt.options.app.head.link?.push({
      rel: 'stylesheet',
      href: options.src
    })

    const fontFallback = options.fallback ? `,${options.fallback}` : ''

    if (options.class)
      classes += `.${options.class}{font-family:"${options.family}"${fontFallback};}`

    if (options.variable)
      variables += `--${options.variable}:"${options.family}"${fontFallback};`
  }

  if (variables) root += `:root{${variables}}`

  const styles = `${classes}${root}`

  if (styles) return nuxt.options.app.head.style?.push({ children: styles })
}
