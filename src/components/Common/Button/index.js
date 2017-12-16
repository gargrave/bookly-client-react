import React from 'react'
import { func, oneOf, string } from 'prop-types'

import { buildClasses } from '@/utils/cssHelpers'

import './styles.css'

const acceptableTypes = [
  'success',
  'secondary',
  'info',
  'warning',
  'danger',
  'light',
  'dark',
]

const classes = (type) => {
  let buttonClass = ''
  if (acceptableTypes.includes(type)) {
    buttonClass = `button-${type}`
  }
  return buildClasses('button', buttonClass)
}

const Button = ({
  onClick,
  text,
  type,
}) => {
  return (
    <button
      type="button"
      className={classes(type)}
      onClick={onClick}>
      { text }
    </button>
  )
}

Button.propTypes = {
  onClick: func.isRequired,
  text: string.isRequired,
  type: oneOf(acceptableTypes).isRequired,
}

export default Button
