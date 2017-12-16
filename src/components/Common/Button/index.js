import React from 'react'
import { bool, func, oneOf, string } from 'prop-types'

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

const acceptablePositions = [
  'left',
  'right',
]

const buttonClass = (type) => {
  if (acceptableTypes.includes(type)) {
    return `button-${type}`
  }
  return ''
}

const positionClass = (position) => {
  if (acceptablePositions.includes(position)) {
    return `button-${position}`
  }
  return ''
}

const classes = (type, position) => {
  return buildClasses(['button', positionClass(position)], buttonClass(type))
}

const Button = ({
  canSubmit,
  onClick,
  position,
  text,
  type,
}) => {
  return (
    <button
      type={canSubmit ? 'submit' : 'button'}
      className={classes(type, position)}
      onClick={onClick}>
      { text }
    </button>
  )
}

Button.propTypes = {
  canSubmit: bool,
  onClick: func.isRequired,
  position: oneOf(acceptablePositions),
  text: string.isRequired,
  type: oneOf(acceptableTypes).isRequired,
}

export default Button
