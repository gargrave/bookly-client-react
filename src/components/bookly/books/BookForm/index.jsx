import React from 'react'
import { array, func, object, shape, string } from 'prop-types'

import { buildClasses } from '@/utils/cssHelpers'

import AuthorSelect from '@/components/bookly/authors/AuthorSelect'
import Button from '@/components/common/Button'

import '@/components/common/Form/styles.css'

const BookForm = ({
  authors,
  book,
  handleAuthorChange,
  handleCancel,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <form
      className={buildClasses(['form', 'book-form'])}
      onSubmit={handleSubmit}
      noValidate>
      <div className="input-field">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" value={book.title} onChange={handleInputChange} />
      </div>

      <AuthorSelect author={book.author} authors={authors} handleChange={handleAuthorChange} />

      <div className="input-field">
        <Button
          canSubmit={true}
          onClick={handleSubmit}
          position="left"
          text="Submit"
          type="success" />

        <Button
          extraClasses="float-right"
          onClick={handleCancel}
          text="Cancel"
          type="light" />
      </div>
    </form>
  )
}

BookForm.propTypes = {
  book: shape({
    title: string.isRequired,
    author: object.isRequired,
  }).isRequired,
  authors: array.isRequired,
  handleAuthorChange: func.isRequired,
  handleInputChange: func.isRequired,
  handleSubmit: func.isRequired,
  handleCancel: func.isRequired,
}

export default BookForm
