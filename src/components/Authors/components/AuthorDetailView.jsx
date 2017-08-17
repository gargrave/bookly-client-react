import React from 'react'
import { number, shape, string } from 'prop-types'

const AuthorDetailView = props => {
  const { author } = props
  return (
    <div>
      <h2>Author Detail</h2>
      <p>
        <strong>Name:</strong> {author.firstName} {author.lastName}
      </p>
      <p>
        <strong>Added on:</strong> {author.createdAt}
      </p>
      <p>
        <strong>Updated on:</strong> {author.updatedAt}
      </p>
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
  })
}

export default AuthorDetailView
