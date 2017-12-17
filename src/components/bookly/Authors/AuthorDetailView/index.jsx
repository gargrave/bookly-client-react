import React from 'react'
import { func, number, shape, string } from 'prop-types'
import { format } from 'date-fns'

import { buildClasses } from '@/utils/cssHelpers'

import Button from '@/components/common/Button'
import Card from '@/components/common/Card'

const AuthorDetailView = (props) => {
  const {
    author,
    onEditClick,
    onBackClick,
  } = props
  return (
    <div className={buildClasses('author-detail-view')}>
      <Card
        classes={['detail-card', 'author-detail-card']}
        hoverable={false}
        title={`${author.firstName} ${author.lastName}`}>

        <hr/>
        <p className={buildClasses('card-text')}>
          <strong>Added:</strong> {format(author.createdAt, 'MMM. DD, YYYY, HH:mm:ss')}
        </p>
        <p className={buildClasses('card-text')}>
          <strong>Updated:</strong> {format(author.updatedAt, 'MMM. DD, YYYY, HH:mm:ss')}
        </p>

        <hr/>
        <Button
          onClick={onEditClick}
          text="Edit"
          type="info" />
        <Button
          onClick={onBackClick}
          text="Back"
          type="light" />
      </Card>
    </div>
  )
}

AuthorDetailView.propTypes = {
  author: shape({
    id: number,
    firstName: string,
    lastName: string,
    createdAt: string,
    updatedAt: string,
  }),
  onBackClick: func.isRequired,
  onEditClick: func.isRequired,
}

export default AuthorDetailView
