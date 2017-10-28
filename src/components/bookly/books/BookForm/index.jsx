import React from 'react'
import { func, shape, string } from 'prop-types'

const BookForm = (props) => {
  return (
    <form
      className="author-form"
      style={{ maxWidth: '500px', margin: 'auto', marginTop: '20px', textAlign: 'left' }}
      onSubmit={props.handleSubmit}
      noValidate
    >
      <div className="input-single">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" value={props.book.title} onChange={props.handleInputChange} />
      </div>

      <div className="input-single">
        <button type="submit" className="submit-button" onClick={props.handleSubmit}>
          Submit
        </button>
        <button type="button" className="button-info float-right cancel-button" onClick={props.handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}

BookForm.propTypes = {
  book: shape({
    title: string.isRequired,
  }).isRequired,
  handleInputChange: func.isRequired,
  handleSubmit: func.isRequired,
  handleCancel: func.isRequired,
}

export default BookForm
