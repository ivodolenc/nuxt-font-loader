/**
 * Parses the `src` path and returns the file format.
 *
 * @since 2.2.2
 */
export const parseFormat = (src: string, strict = false) => {
  let [, format] = src.split(/\.(?=[^.]+$)/)

  if (strict) {
    if (format === 'ttf') format = 'truetype'
    else if (format === 'otf') format = 'opentype'
  }

  return format
}
