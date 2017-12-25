// @flow
import React from 'react';
import { bool, func, shape, string } from 'prop-types';

import Form from '../../../common/Form';
import InputField from '../../../common/InputField';

type Props = {
  disabled?: boolean,
  onInputChange: Function,
  onSubmit: Function,
  user: any,
};

function LoginForm({
  disabled = false,
  onInputChange,
  onSubmit,
  user,
}: Props) {
  return (
    <Form
      classes={['login-form']}
      dislabed={disabled}
      onSubmit={onSubmit}
    >

      <InputField
        boundValue={user.email}
        label="Email"
        name="email"
        onInputChange={onInputChange}
        type="email"
      />

      <InputField
        boundValue={user.password}
        label="Password"
        name="password"
        onInputChange={onInputChange}
        type="password"
      />
    </Form>
  );
}

LoginForm.propTypes = {
  disabled: bool,
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
    user: shape({
      email: string.isRequired,
      password: string.isRequired,
    }).isRequired,
};

export default LoginForm;
