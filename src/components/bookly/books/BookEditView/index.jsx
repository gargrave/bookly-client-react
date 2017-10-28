import React from 'react'
import { func, number, shape, string } from 'prop-types'

import BookForm from '@/components/bookly/books/BookForm'

const BookDetailView = (props) => {
  return (
    <div className="book-edit-view">
      <h2>Edit Book</h2>
      <BookForm
        book={props.book}
        handleInputChange={props.handleInputChange}
        handleSubmit={props.handleSubmit}
        handleCancel={props.handleCancel}
      />
    </div>
  )
}

BookDetailView.propTypes = {
  book: shape({
    id: number,
    title: string,
    createdAt: string,
    updatedAt: string,
  }),
  handleInputChange: func.isRequired,
  handleSubmit: func.isRequired,
  handleCancel: func.isRequired,
}

export default BookDetailView
