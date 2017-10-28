import React from 'react'
import { array, func } from 'prop-types'

import AuthorListDetail from '@/components/bookly/authors/AuthorListDetail'
import Alert from '@/components/common/Alert/'

const authorList = (authors, onAuthorClick) => {
  return (
    <div>
      {authors.map((author) =>
        <AuthorListDetail
          author={author}
          key={author.id}
          onClick={onAuthorClick.bind(null, author.id)} />)}
    </div>
  )
}

const noAuthorsMessage = () => (
  <Alert
    message={'No Authors created yet!'}
    type={'info'} />
)

const AuthorList = ({
  authors,
  onAuthorClick,
}) => {
  return (
    authors.length ? authorList(authors, onAuthorClick) : noAuthorsMessage()
  )
}

AuthorList.propTypes = {
  authors: array.isRequired,
  onAuthorClick: func.isRequired,
}

export default AuthorList
