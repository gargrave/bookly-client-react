import React from 'react'
import { func, oneOf, string } from 'prop-types'

import { prependClass } from '@/utils/cssHelpers'

import './styles.css'

const classes = (type) => {
  let buttonClass = ''
  if (type === 'success') {
    buttonClass = 'button-success'
  }
  return `${prependClass('button')} ${buttonClass}`
}

const Button = ({
  onClick,
  text,
  type,
}) => {
  return (
    <button
      className={classes(type)}
      onClick={onClick}>
      { text }
    </button>
  )
}

Button.propTypes = {
  onClick: func.isRequired,
  text: string.isRequired,
  type: oneOf(['success']).isRequired,
}

export default Button
