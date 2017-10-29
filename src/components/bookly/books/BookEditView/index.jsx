import React from 'react'
import { array, func, number, shape, string } from 'prop-types'

import BookForm from '@/components/bookly/books/BookForm'

const BookEditView = ({
  authors,
  book,
  handleAuthorChange,
  handleCancel,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <div className="book-edit-view">
      <h2>Edit Book</h2>
      <BookForm
        authors={authors}
        book={book}
        handleAuthorChange={handleAuthorChange}
        handleCancel={handleCancel}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

BookEditView.propTypes = {
  authors: array.isRequired,
  book: shape({
    id: number,
    title: string,
    createdAt: string,
    updatedAt: string,
  }),
  handleAuthorChange: func.isRequired,
  handleInputChange: func.isRequired,
  handleSubmit: func.isRequired,
  handleCancel: func.isRequired,
}

export default BookEditView
