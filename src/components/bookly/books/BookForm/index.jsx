import React from 'react'
import { array, func, object, shape, string } from 'prop-types'

import { buildClasses } from '@/utils/cssHelpers'

import AuthorSelect from '@/components/bookly/authors/AuthorSelect'
import Button from '@/components/common/Button'

import '@/components/common/Form/styles.css'

const BookForm = ({
  authors,
  book,
  onAuthorChange,
  onCancel,
  onInputChange,
  onSubmit,
}) => {
  return (
    <form
      className={buildClasses(['form', 'book-form'])}
      onSubmit={onSubmit}
      noValidate>
      <div className="input-field">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" value={book.title} onChange={onInputChange} />
      </div>

      <AuthorSelect
        author={book.author}
        authors={authors}
        onChange={onAuthorChange} />

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
          type="light" />
      </div>
    </form>
  )
}

BookForm.propTypes = {
  authors: array.isRequired,
  book: shape({
    title: string.isRequired,
    author: object.isRequired,
  }).isRequired,
  onAuthorChange: func.isRequired,
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
}

export default BookForm
