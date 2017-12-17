import React from 'react'
import { array, func, number, shape, string } from 'prop-types'

import BookForm from '@/components/bookly/books/BookForm'

const BookEditView = ({
  authors,
  book,
  onAuthorChange,
  onCancel,
  onInputChange,
  onSubmit,
}) => {
  return (
    <div className="book-edit-view">
      <h2>Edit Book</h2>
      <BookForm
        authors={authors}
        book={book}
        onAuthorChange={onAuthorChange}
        onCancel={onCancel}
        onInputChange={onInputChange}
        onSubmit={onSubmit} />
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
  onAuthorChange: func.isRequired,
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
}

export default BookEditView
