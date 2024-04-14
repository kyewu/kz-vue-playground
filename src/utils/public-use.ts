// get assets
export function getAssetsFile(name: string): string {
  return new URL(`../assets/${name}`, import.meta.url).href
}

export function getImagePath(name: string): string {
  if (!name)
    return ''
  let prefixPath = 'imgs'
  if (name.startsWith('course'))
    prefixPath = `${prefixPath}/course`
  if (name.startsWith('banner'))
    prefixPath = `${prefixPath}/banner`
  if (name.startsWith('title'))
    prefixPath = `${prefixPath}/title`
  return new URL(`../assets/${prefixPath}/${name}`, import.meta.url).href
}
