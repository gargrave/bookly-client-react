import React from 'react'
import { func, shape, string } from 'prop-types'

import { buildClasses } from '@/utils/cssHelpers'

import Button from '@/components/common/Button'
import InputField from '@/components/common/InputField'

import '@/components/common/Form/styles.css'

const LoginForm = ({
  user,
  onInputChange,
  onSubmit,
}) => {
  return (
    <form
      className={buildClasses(['form', 'login-form'])}
      onSubmit={onSubmit}
      noValidate>

      <InputField
        boundValue={user.email}
        label="Email"
        name="email"
        onInputChange={onInputChange}
        type="email" />

      <InputField
        boundValue={user.password}
        label="Password"
        name="password"
        onInputChange={onInputChange}
        type="password" />

      <div className="input-field">
        <Button
          canSubmit={true}
          onClick={onSubmit}
          position="left"
          text="Login"
          type="success" />
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  user: shape({
    email: string.isRequired,
    password: string.isRequired,
  }).isRequired,
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
}

export default LoginForm
