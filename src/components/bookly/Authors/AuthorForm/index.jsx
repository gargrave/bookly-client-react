import React from 'react'
import { func, shape, string } from 'prop-types'

import { buildClasses } from '@/utils/cssHelpers'

import Button from '@/components/common/Button'
import InputField from '@/components/common/InputField'

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
      onSubmit={onSubmit}
      noValidate>

      <InputField
        boundValue={author.firstName}
        label="First name"
        name="firstName"
        onInputChange={onInputChange} />

      <InputField
        boundValue={author.lastName}
        label="Last name"
        name="lastName"
        onInputChange={onInputChange} />

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
