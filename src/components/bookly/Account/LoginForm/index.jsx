import React from 'react'
import { func, shape, string } from 'prop-types'

import { buildClasses } from '@/utils/cssHelpers'

import Button from '@/components/common/Button'

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
      <div className="input-field">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={user.email} onChange={onInputChange} />
      </div>

      <div className="input-field">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={onInputChange} />
      </div>

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
