import React from 'react'
import { func, number, shape, string } from 'prop-types'

import Button from '@/components/common/Button'

const AuthorDetailView = (props) => {
  const {
    author,
    onEditClick,
    onBackClick,
  } = props
  return (
    <div className="author-detail-view">
      <h2>Author Detail</h2>
      <p className="author-name">
        <strong>Name:</strong> {author.firstName} {author.lastName}
      </p>
      <p className="author-added-on">
        <strong>Added on:</strong> {author.createdAt}
      </p>
      <p className="author-updated-on">
        <strong>Updated on:</strong> {author.updatedAt}
      </p>

      <Button
        onClick={onEditClick}
        text="Edit"
        type="info" />
      <Button
        onClick={onBackClick}
        text="Back"
        type="light" />
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
