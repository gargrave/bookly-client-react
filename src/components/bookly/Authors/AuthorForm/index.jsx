import React from 'react'
import { func, shape, string } from 'prop-types'

import { buildClasses } from '@/utils/cssHelpers'

import Button from '@/components/common/Button'

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
      <div className="input-field">
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={author.firstName}
          onChange={onInputChange}
        />
      </div>

      <div className="input-field">
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={author.lastName}
          onChange={onInputChange}
        />
      </div>

      <div className="input-field">
        <Button
          canSubmit={true}
          onClick={onSubmit}
          position="left"
          text="Submit"
          type="success" />
        <Button
          extraClasses="float-right"
          onClick={onCancel}
          text="Cancel"
          type="info" />
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
