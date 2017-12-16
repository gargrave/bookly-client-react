function buildClasses (prepends, statics = []) {
  if (!Array.isArray(prepends)) {
    prepends = [prepends]
  }
  if (!Array.isArray(statics)) {
    statics = [statics]
  }

  const first = prepends.map((p) => prependClass(p)).join(' ')
  const second = statics.length ? ` ${statics.join(' ')}` : ''
  return `${first}${second}`
}

function prependClass (className) {
  if (!className.match(/^bookly-/)) {
    return `bookly-${className}`
  }
  return className
}

export {
  buildClasses,
  prependClass,
}
