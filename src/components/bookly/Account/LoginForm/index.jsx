import React from 'react'
import { func, shape, string } from 'prop-types'

import { buildClasses } from '@/utils/cssHelpers'

import '@/components/common/Form/styles.css'

const LoginForm = (props) => {
  return (
    <form
      className={buildClasses(['form', 'login-form'])}
      onSubmit={props.handleSubmit}
      noValidate
    >
      <div className="input-field">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={props.user.email} onChange={props.handleInputChange} />
      </div>

      <div className="input-field">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={props.user.password}
          onChange={props.handleInputChange}
        />
      </div>

      <div className="input-field">
        <button type="submit" className="submit-button" onClick={props.handleSubmit}>
          Login
        </button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  user: shape({
    email: string.isRequired,
    password: string.isRequired,
  }).isRequired,
  handleInputChange: func.isRequired,
  handleSubmit: func.isRequired,
}

export default LoginForm
