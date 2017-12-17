import React from 'react'
import { func, number, object, shape, string } from 'prop-types'

import Card from '@/components/common/Card'

const BookListDetail = ({
  book,
  onClick,
}) => {
  return (
    <Card
      classes={['book-card']}
      onClick={onClick}
      text={book.author.name}
      title={book.title} />
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
