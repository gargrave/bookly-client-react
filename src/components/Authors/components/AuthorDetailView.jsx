import React from 'react'
import { func, number, shape, string } from 'prop-types'

const AuthorDetailView = props => {
  const { author } = props
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
      <button className="author-edit-button" onClick={props.handleEditClick}>
        Edit
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
    updatedAt: string
  }),
  handleEditClick: func.isRequired
}

export default AuthorDetailView
