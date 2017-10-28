import React from 'react'
import { array, func } from 'prop-types'

import AuthorListDetail from '@/components/bookly/authors/AuthorListDetail'
import InfoAlert from '@/components/common/Alert/InfoAlert/'

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

const noAuthorsMessage = () => <InfoAlert message={'No Authors created yet!'} />

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
