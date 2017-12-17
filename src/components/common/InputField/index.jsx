import React from 'react'
import { func, oneOf, string } from 'prop-types'

const acceptableTypes = [
  'email',
  'password',
  'text',
]

const InputField = ({
  boundValue,
  label,
  name,
  onInputChange,
  type,
}) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}:</label>
      <input
        type={type || 'text'}
        name={name}
        id={name}
        value={boundValue}
        onChange={onInputChange} />
    </div>
  )
}

InputField.propTypes = {
  boundValue: string.isRequired,
  label: string.isRequired,
  name: string.isRequired,
  onInputChange: func.isRequired,
  type: oneOf(acceptableTypes),
}

export default InputField
