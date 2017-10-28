import React from 'react'
import { func, shape, string } from 'prop-types'

import './styles.css'

const AuthorListDetail = ({
  author,
  onClick,
}) => {
  return (
    <div className="author-list-detail" onClick={onClick}>
      <p className="author-name">
        {author.firstName} {author.lastName}
      </p>
    </div>
  )
}

AuthorListDetail.propTypes = {
  author: shape({
    firstName: string.isRequired,
    lastName: string.isRequired,
  }),
  onClick: func.isRequired,
}

export default AuthorListDetail
