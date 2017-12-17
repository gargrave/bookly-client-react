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

const buildClassList = (type, position, classes) => {
  return buildClasses(
    ['button', positionClass(position)],
    [buttonClass(type), ...classes.split(' ')]
  )
}

const Button = ({
  canSubmit,
  classes = '',
  onClick,
  position,
  text,
  type,
}) => {
  return (
    <button
      type={canSubmit ? 'submit' : 'button'}
      className={buildClassList(type, position, classes)}
      onClick={onClick}>
      { text }
    </button>
  )
}

Button.propTypes = {
  canSubmit: bool,
  classes: string,
  onClick: func.isRequired,
  position: oneOf(acceptablePositions),
  text: string.isRequired,
  type: oneOf(acceptableTypes).isRequired,
}

export default Button
