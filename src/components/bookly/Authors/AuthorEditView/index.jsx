import React from 'react'
import { func, number, shape, string } from 'prop-types'

import AuthorForm from '@/components/bookly/authors/AuthorForm'

const AuthorDetailView = ({
  author,
  onCancel,
  onInputChange,
  onSubmit,
}) => {
  return (
    <div className="author-edit-view">
      <h2>Edit Author</h2>
      <AuthorForm
        author={author}
        onCancel={onCancel}
        onInputChange={onInputChange}
        onSubmit={onSubmit} />
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
  onCancel: func.isRequired,
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
}

export default AuthorDetailView
