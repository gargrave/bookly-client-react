import React from 'react'
import { func, number, shape, string } from 'prop-types'

const AuthorDetailView = (props) => {
  const { author, onEditClick, onBackClick } = props
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
      <button type="button" className="author-edit-button" onClick={onEditClick}>
        Edit
      </button>&nbsp;
      <button type="button" className="button-info cancel-button" onClick={onBackClick}>
        Back
      </button>
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
