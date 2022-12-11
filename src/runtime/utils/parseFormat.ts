/**
 * Parses the `src` path and returns the file format.
 *
 * @since 2.2.2
 */
export const parseFormat = (src: string) => {
  const [, format] = src.split(/\.(?=[^.]+$)/)

  return format
}
