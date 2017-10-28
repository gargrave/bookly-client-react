import React from 'react'
import { array, func } from 'prop-types'

import AuthorListDetail from '@/components/bookly/authors/AuthorListDetail'

const AuthorList = ({
  authors,
  onAuthorClick,
}) => {
  return (
    <div>
      {authors.map((author) =>
        <AuthorListDetail
          author={author}
          key={author.id}
          onClick={onAuthorClick.bind(null, author.id)} />
      )}
    </div>
  )
}

AuthorList.propTypes = {
  authors: array.isRequired,
  onAuthorClick: func.isRequired,
}

export default AuthorList
