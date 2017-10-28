export const prependClass = (className) => {
  if (!className.match(/^bookly-/)) {
    return `bookly-${className}`
  }
  return className
}
