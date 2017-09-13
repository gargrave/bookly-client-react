import React, { Component } from 'react'
import { connect } from 'react-redux'
import { object } from 'prop-types'

import bookModel from '../../../models/Book.model'
import { localUrls } from '../../../constants/urls'

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
    const key = event.target.name
    const book = Object.assign({}, this.state.book)
    if (key in book) {
      book[key] = event.target.value
      this.setState({ book })
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('handleSubmit')
  }

  handleCancel (event) {
    event.preventDefault()
    this.props.history.push(localUrls.booksList)
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

BookCreatePage.propTypes = {
  history: object
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(BookCreatePage)
