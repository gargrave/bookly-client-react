import React from 'react'
import { number, shape, string } from 'prop-types'

const AuthorListDetail = props => {
  return (
    <div>
      <p>
        Name: {props.author.firstName} {props.author.lastName}
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
  })
}

export default AuthorListDetail
