import React from 'react'
import { func, number, shape, string } from 'prop-types'

const BookDetailView = (props) => {
  const { book, handleEditClick, handleBackClick } = props
  return (
    <div className="book-detail-view">
      <h2>Book Detail</h2>
      <p className="book-name">
        <strong>Title:</strong> {book.title}
      </p>
      <p className="author-name">
        <strong>Author:</strong> {book.author.name}
      </p>
      <p className="book-added-on">
        <strong>Added on:</strong> {book.createdAt}
      </p>
      <p className="book-updated-on">
        <strong>Updated on:</strong> {book.updatedAt}
      </p>
      <button type="button" className="book-edit-button" onClick={handleEditClick}>
        Edit
      </button>&nbsp;
      <button type="button" className="button-info cancel-button" onClick={handleBackClick}>
        Back
      </button>
    </div>
  )
}

BookDetailView.propTypes = {
  book: shape({
    id: number,
    title: string,
    author: shape({
      name: string,
    }),
    createdAt: string,
    updatedAt: string,
  }),
  handleEditClick: func.isRequired,
  handleBackClick: func.isRequired,
}

export default BookDetailView
