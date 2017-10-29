import React from 'react'
import { func, number, object, shape, string } from 'prop-types'

import './styles.css'

const BookListDetail = ({
  book,
  onClick,
}) => {
  return (
    <div className="book-list-detail" onClick={onClick}>
      <p className="book-title">{book.title}</p>
      <p className="book-author">{book.author.name}</p>
    </div>
  )
}

BookListDetail.propTypes = {
  book: shape({
    id: number.isRequired,
    title: string.isRequired,
    author: object.isRequired,
  }),
  onClick: func.isRequired,
}

export default BookListDetail
