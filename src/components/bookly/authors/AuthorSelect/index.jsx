import React from 'react'
import { array, func, object } from 'prop-types'

const options = (authors) => {
  return authors.map((a) => (
    <option key={a.id} value={a.id}>
      {a.firstName} {a.lastName}
    </option>
  ))
}

const AuthorSelect = ({
  author,
  authors,
  onChange,
}) => {
  return (
    <div className="input-field">
      <select
        className="author-select"
        value={author.id}
        onChange={onChange}>
        <option value="-1">Select Author...</option>
        {options(authors)}
      </select>
    </div>
  )
}

AuthorSelect.propTypes = {
  author: object.isRequired,
  authors: array.isRequired,
  onChange: func.isRequired,
}

export default AuthorSelect
