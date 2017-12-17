import React from 'react'
import { func, shape, string } from 'prop-types'

import Card from '@/components/common/Card'

const AuthorListDetail = ({
  author,
  onClick,
}) => {
  return (
    <Card
      classes={['author-card']}
      onClick={onClick}
      title={`${author.firstName} ${author.lastName}`} />
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
