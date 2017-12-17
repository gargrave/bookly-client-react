import React from 'react'
import { func, number, shape, string } from 'prop-types'

import Button from '@/components/common/Button'

const BookDetailView = (props) => {
  const {
    book,
    onEditClick,
    onBackClick,
  } = props
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

      <Button
        onClick={onEditClick}
        position="left"
        text="Edit"
        type="success" />

      <Button
        onClick={onBackClick}
        text="Back"
        type="light" />
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
  onEditClick: func.isRequired,
  onBackClick: func.isRequired,
}

export default BookDetailView
