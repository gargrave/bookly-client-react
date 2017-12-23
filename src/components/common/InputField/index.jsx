// @flow
import React from 'react';
import { func, oneOf, string } from 'prop-types';

type Props = {
  boundValue: string,
  label: string,
  name: string,
  onInputChange: Function,
  type?: string,
};

const acceptableTypes = [
  'email',
  'password',
  'text',
];

function InputField({
  boundValue,
  label,
  name,
  onInputChange,
  type,
}: Props) {
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
  );
}

InputField.propTypes = {
  boundValue: string.isRequired,
  label: string.isRequired,
  name: string.isRequired,
  onInputChange: func.isRequired,
  type: oneOf(acceptableTypes),
};

export default InputField;
