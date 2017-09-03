import React from 'react'
import { func, number, shape, string } from 'prop-types'

import './BookListDetail.css'

const BookListDetail = props => {
  return (
    <div className="book-list-detail" onClick={props.onClick}>
      <p className="book-title">{props.book.title}</p>
    </div>
  )
}

BookListDetail.propTypes = {
  book: shape({
    id: number.isRequired,
    title: string.isRequired
  }),
  onClick: func.isRequired
}

export default BookListDetail
