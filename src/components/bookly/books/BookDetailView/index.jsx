import React from 'react'
import { func, number, shape, string } from 'prop-types'

import { buildClasses } from '@/utils/cssHelpers'

import Button from '@/components/common/Button'
import Card from '@/components/common/Card'

const BookDetailView = (props) => {
  const {
    book,
    onEditClick,
    onBackClick,
  } = props
  return (
    <div className={buildClasses('book-detail-view')}>
      <Card
        classes={['book-detail-card']}
        onClick={() => null}
        text={`by ${book.author.name}`}
        title={book.title}>
        <p className={buildClasses('card-spacer')}></p>
        <p className={buildClasses('card-text')}>
          <strong>Added on:</strong> {book.createdAt}
        </p>
        <p className={buildClasses('card-text')}>
          <strong>Updated on:</strong> {book.updatedAt}
        </p>
      </Card>

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
