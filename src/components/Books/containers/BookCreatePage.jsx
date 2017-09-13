import React, { Component } from 'react'
import { connect } from 'react-redux'

import bookModel from '../../../models/Book.model'
import BookForm from '../components/BookForm'

class BookCreatePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      book: bookModel.empty()
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleInputChange (event) {
    console.log('handleInputChange')
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('handleSubmit')
  }

  handleCancel (event) {
    event.preventDefault()
    console.log('handleCancel')
  }

  render () {
    const { book } = this.state
    return (
      <div>
        <h2>BookCreatePage</h2>
        <BookForm
          book={book}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          handleCancel={this.handleCancel}
        />
      </div>
    )
  }
}

BookCreatePage.propTypes = {}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(BookCreatePage)
