import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func, number, object, shape, string } from 'prop-types'

import { localUrls } from '../../../constants/urls'
import { updateBook } from '../../../store/actions/book-actions'
import bookModel from '../../../models/Book.model'
import BookDetailView from '../components/BookDetailView'
import BookEditView from '../components/BookEditView'

class BookDetailPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      editing: false,
      editableBook: bookModel.empty(),
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleBackClick = this.handleBackClick.bind(this)
  }

  handleInputChange (event) {
    const key = event.target.name
    if (key in this.state.editableBook) {
      let editableBook = Object.assign({}, this.state.editableBook)
      editableBook[key] = event.target.value
      this.setState({ editableBook })
    }
  }

  async handleSubmit (event) {
    event.preventDefault()
    console.log('TODO: complete the form and submit data')
  }

  /**
   * Enables 'editing' state and sets the editable book's value
   * to the current book from the store.
   */
  handleEditClick () {
    this.setState({
      editing: true,
      editableBook: {
        title: this.props.book.title,
      },
    })
  }

  /**
   * Disables 'editing' state.
   */
  handleCancel (event) {
    event.preventDefault()
    this.setState({ editing: false })
  }

  handleBackClick () {
    this.props.history.push(localUrls.booksList)
  }

  render () {
    const { editing } = this.state
    return (
      <div>
        {!editing && (
          <BookDetailView
            book={this.props.book}
            handleEditClick={this.handleEditClick}
            handleBackClick={this.handleBackClick}
          />
        )}
        {editing && (
          <BookEditView
            book={this.state.editableBook}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            handleCancel={this.handleCancel}
          />
        )}
      </div>
    )
  }
}

BookDetailPage.propTypes = {
  history: object,
  book: shape({
    id: number,
    title: string,
    createdAt: string,
    updatedAt: string,
  }),
  updateBook: func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  const bookID = ownProps.match.params.id
  const book = state.books.data.find((a) => Number(a.id) === Number(bookID)) || {}

  return {
    book,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateBook (book) {
    return dispatch(updateBook(book))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailPage)
