// @flow
import React from 'react'
import { array, func, object } from 'prop-types'

import type { Author } from '../../../../constants/flowtypes'

type Props = {
  author: Author,
  authors: array.isRequired,
  onChange: func.isRequired,
}

function options (authors: Author[]) {
  return authors.map((a: Author) => (
    <option key={a.id} value={a.id}>
      {a.firstName} {a.lastName}
    </option>
  ))
}

function AuthorSelect ({
  author,
  authors,
  onChange,
}: Props) {
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
