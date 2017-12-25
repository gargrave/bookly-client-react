// @flow
import React from 'react';
import { bool, func, oneOf, string } from 'prop-types';

type Props = {
  boundValue: string,
  disabled?: boolean,
  error?: string,
  label?: string,
  name: string,
  onInputChange: Function,
  placeholder?: string,
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
  error,
  label,
  name,
  onInputChange,
  placeholder,
  type,
}: Props) {
  return (
    <div className="input-field">
      {label && <label htmlFor={name}>{label}:</label>}

      <input
        className={!!error ? 'input-invalid' : ''}
        disabled={disabled || false}
        id={name}
        name={name}
        onChange={onInputChange}
        placeholder={placeholder || ''}
        type={type || 'text'}
        value={boundValue}
      />

      {error &&
        <p className="form-error">
          {error}
        </p>
      }
    </div>
  );
}

InputField.propTypes = {
  boundValue: string.isRequired,
  disabled: bool,
  error: string,
  label: string,
  name: string.isRequired,
  onInputChange: func.isRequired,
  placeholder: string,
  type: oneOf(acceptableTypes),
};

export default InputField;
