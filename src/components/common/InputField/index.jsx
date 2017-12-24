// @flow
import React from 'react';
import { bool, func, oneOf, string } from 'prop-types';

type Props = {
  boundValue: string,
  disabled?: boolean,
  label?: string,
  name: string,
  onInputChange: Function,
  type?: string,
};

const acceptableTypes = [
  'email',
  'password',
  'search',
  'text',
];

function InputField({
  boundValue,
  disabled,
  label,
  name,
  onInputChange,
  type,
}: Props) {
  return (
    <div className="input-field">
      {label && <label htmlFor={name}>{label}:</label>}
      <input
        disabled={disabled || false}
        type={type || 'text'}
        name={name}
        id={name}
        value={boundValue}
        onChange={onInputChange} />
    </div>
  );
}

InputField.propTypes = {
  boundValue: string.isRequired,
  disabled: bool,
  label: string,
  name: string.isRequired,
  onInputChange: func.isRequired,
  type: oneOf(acceptableTypes),
};

export default InputField;
