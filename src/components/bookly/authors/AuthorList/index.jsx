import React from 'react'
import { array, func } from 'prop-types'

import AuthorListDetail from '@/components/bookly/authors/AuthorListDetail'

const AuthorList = ({
  authors,
  onClick,
}) => {
  return (
    <div>
      {authors.map((author) =>
        <AuthorListDetail
          author={author}
          key={author.id}
          onClick={onClick.bind(null, author.id)} />
      )}
    </div>
  )
}

AuthorList.propTypes = {
  authors: array.isRequired,
  onClick: func.isRequired,
}

export default AuthorList
