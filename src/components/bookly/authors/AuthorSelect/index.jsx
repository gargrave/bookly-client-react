import React from 'react'
import { array, func, number } from 'prop-types'

import './styles.css'

const options = (authors) => {
  return authors.map((a) => (
    <option key={a.id} value={a.id}>
      {a.firstName} {a.lastName}
    </option>
  ))
}

const AuthorSelect = ({ authors, handleChange, selectedAuthorId }) => {
  return (
    <div className="input-single">
      <select className="author-select" value={selectedAuthorId} onChange={handleChange}>
        {options(authors)}
      </select>
    </div>
  )
}

AuthorSelect.propTypes = {
  authors: array.isRequired,
  handleChange: func.isRequired,
  selectedAuthorId: number.isRequired,
}

export default AuthorSelect
