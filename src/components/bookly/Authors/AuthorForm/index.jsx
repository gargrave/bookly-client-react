import React from 'react'
import { func, shape, string } from 'prop-types'

import { buildClasses } from '@/utils/cssHelpers'

import '@/components/common/Form/styles.css'

const AuthorForm = ({
  author,
  onCancel,
  onInputChange,
  onSubmit,
}) => {
  return (
    <form
      className={buildClasses(['form', 'author-form'])}
      style={{ maxWidth: '500px', margin: 'auto', marginTop: '20px', textAlign: 'left' }}
      onSubmit={onSubmit}
      noValidate>
      <div className="input-single">
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={author.firstName}
          onChange={onInputChange}
        />
      </div>

      <div className="input-single">
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={author.lastName}
          onChange={onInputChange}
        />
      </div>

      <div className="input-single">
        <button type="submit" className="submit-button" onClick={onSubmit}>
          Submit
        </button>
        <button type="button" className="button-info float-right cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}

AuthorForm.propTypes = {
  author: shape({
    firstName: string.isRequired,
    lastName: string.isRequired,
  }).isRequired,
  onCancel: func.isRequired,
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
}

export default AuthorForm
