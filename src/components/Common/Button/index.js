import React from 'react'
import { func, string } from 'prop-types'

const classname = (type) => {
  if (type === 'success') {
    return 'buttons-success'
  }
}

const Button = ({
  onClick,
  text,
  type,
}) => {
  return (
    <button
      className={classname(type)}
      style={{ marginLeft: '10px' }}
      onClick={onClick}>
      { text }
    </button>
  )
}

Button.propTypes = {
  onClick: func.isRequired,
  text: string.isRequired,
  type: string.isRequired,
}

export default Button
