import React from 'react'
import { array, func, object } from 'prop-types'

import './styles.css'

const options = (authors) => {
  return authors.map((a) => (
    <option key={a.id} value={a.id}>
      {a.firstName} {a.lastName}
    </option>
  ))
}

const AuthorSelect = ({ author, authors, handleChange }) => {
  return (
    <div className="input-single">
      <select className="author-select" value={author.id} onChange={handleChange}>
        <option value="-1">Select Author...</option>
        {options(authors)}
      </select>
    </div>
  )
}

AuthorSelect.propTypes = {
  author: object.isRequired,
  authors: array.isRequired,
  handleChange: func.isRequired,
}

export default AuthorSelect
