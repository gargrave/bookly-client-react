import React from 'react'
import { func, number, shape, string } from 'prop-types'
import { format } from 'date-fns'

import { buildClasses } from '@/utils/cssHelpers'

import Button from '@/components/common/Button'
import ButtonRow from '@/components/common/ButtonRow'
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
        classes={['detail-card', 'book-detail-card']}
        hoverable={false}
        text={`by ${book.author.name}`}
        title={book.title}>

        <hr/>
        <p className={buildClasses('card-text')}>
          <strong>Added:</strong> {format(book.createdAt, 'MMM. DD, YYYY, HH:mm:ss')}
        </p>
        <p className={buildClasses('card-text')}>
          <strong>Updated:</strong> {format(book.updatedAt, 'MMM. DD, YYYY, HH:mm:ss')}
        </p>

        <hr/>
        <ButtonRow>
          <Button
            onClick={onEditClick}
            position="left"
            text="Edit"
            type="info" />

          <Button
            onClick={onBackClick}
            text="Back"
            type="light" />
        </ButtonRow>
      </Card>
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
