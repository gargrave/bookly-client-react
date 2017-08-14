import React from 'react'
import { func, shape, string } from 'prop-types'

const AuthorForm = props => {
  return (
    <form noValidate style={{ maxWidth: '500px', margin: 'auto', marginTop: '20px', textAlign: 'left' }}>
      <div className="input-single">
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={props.author.firstName}
          onChange={props.handleInputChange}
        />
      </div>

      <div className="input-single">
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={props.author.lastName}
          onChange={props.handleInputChange}
        />
      </div>

      <div className="input-single">
        <button type="button" onClick={props.handleSubmit}>
          Submit
        </button>
        <button type="button" className="button-info float-right" onClick={props.handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}

AuthorForm.propTypes = {
  author: shape({
    firstName: string.isRequired,
    lastName: string.isRequired
  }).isRequired,
  handleInputChange: func.isRequired,
  handleSubmit: func.isRequired,
  handleCancel: func.isRequired
}

export default AuthorForm
