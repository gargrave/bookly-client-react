import React from 'react'
import { func, shape, string } from 'prop-types'

const LoginForm = props => {
  return (
    <form noValidate style={{ maxWidth: '500px', margin: 'auto', marginTop: '20px', textAlign: 'left' }}>
      <div className="input-single">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={props.user.email} onChange={props.handleInputChange} />
      </div>

      <div className="input-single">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={props.user.password}
          onChange={props.handleInputChange}
        />
      </div>

      <div className="input-single">
        <button type="submit" onClick={props.handleLogin}>
          Login
        </button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  user: shape({
    email: string.isRequired,
    password: string.isRequired
  }).isRequired,
  handleInputChange: func.isRequired,
  handleLogin: func.isRequired
}

export default LoginForm
