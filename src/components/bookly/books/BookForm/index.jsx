import React from 'react'
import { array, func, object, shape, string } from 'prop-types'

import AuthorSelect from '@/components/bookly/authors/AuthorSelect'

const BookForm = ({ authors, book, handleAuthorChange, handleCancel, handleInputChange, handleSubmit }) => {
  return (
    <form
      className="author-form"
      style={{ maxWidth: '500px', margin: 'auto', marginTop: '20px', textAlign: 'left' }}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="input-single">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" value={book.title} onChange={handleInputChange} />
      </div>

      <AuthorSelect author={book.author} authors={authors} handleChange={handleAuthorChange} />

      <div className="input-single">
        <button type="submit" className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" className="button-info float-right cancel-button" onClick={handleCancel}>
          Cancel
        </button>
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
