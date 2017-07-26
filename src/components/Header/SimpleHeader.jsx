import React from 'react'
import { Link } from 'react-router-dom'

const SimpleHeader = () => {
  return (
    <div>
      <Link to="/books">Books</Link>
      {' | '}
      <Link to="/authors">Authors</Link>
      {' | '}
      <Link to="/account">Account</Link>
    </div>
  )
}

export default SimpleHeader
