import React from 'react'
import { func, number, shape, string } from 'prop-types'

import './AuthorListDetail.css'

const AuthorListDetail = props => {
  return (
    <div className="author-list-detail" onClick={props.onClick}>
      <p>
        {props.author.firstName} {props.author.lastName}
      </p>
    </div>
  )
}

AuthorListDetail.propTypes = {
  author: shape({
    id: number.isRequired,
    firstName: string.isRequired,
    lastName: string.isRequired,
    createdAt: string.isRequired,
    updatedAt: string.isRequired
  }),
  onClick: func.isRequired
}

export default AuthorListDetail
