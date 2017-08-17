import React from 'react'
import { func, number, shape, string } from 'prop-types'

import AuthorForm from '../components/AuthorForm'

const AuthorDetailView = props => {
  return (
    <div>
      <h2>Edit Author</h2>
      <AuthorForm
        author={props.author}
        handleInputChange={props.handleInputChange}
        handleSubmit={props.handleSubmit}
        handleCancel={props.handleCancel}
      />
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
  handleInputChange: func.isRequired,
  handleSubmit: func.isRequired,
  handleCancel: func.isRequired
}

export default AuthorDetailView
