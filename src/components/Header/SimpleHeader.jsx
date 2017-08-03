import React from 'react'
import { Link } from 'react-router-dom'

import { localUrls } from '../../constants/urls'

const SimpleHeader = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      {' | '}
      <Link to={localUrls.booksList}>Books</Link>
      {' | '}
      <Link to={localUrls.authorsList}>Authors</Link>
      {' | '}
      <Link to={localUrls.account}>Account</Link>
      {' | '}
      <Link to={localUrls.login}>Login</Link>
    </div>
  )
}

export default SimpleHeader
