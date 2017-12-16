import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array, func, number, object, shape, string } from 'prop-types'

import { localUrls } from '@/constants/urls'
import { fetchBooks, updateBook } from '@/store/actions/book-actions'
import bookModel from '@/models/Book.model'

import RequiresAuth from '@/components/common/hocs/RequiresAuth'
import BookDetailView from '@/components/bookly/books/BookDetailView'
import BookEditView from '@/components/bookly/books/BookEditView'

class BookDetailPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      editing: false,
      editableBook: bookModel.empty(),
    }

    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleBackClick = this.handleBackClick.bind(this)
  }

  componentDidMount () {
    this.refreshBooks()
  }

  async refreshBooks () {
    try {
      await this.props.fetchBooks()
      console.log('lksajdlfjslkjf')
    } catch (err) {
      console.log('TODO: handle error!')
      console.log(err)
    }
  }

  handleAuthorChange (event) {
    const authorId = Number(event.target.value)
    const author = this.props.authors.find((a) => a.id === authorId)
    const editableBook = Object.assign({}, this.state.editableBook, { author })

    if (author) {
      this.setState({
        editableBook,
      })
    }
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
    const book = bookModel.toAPI(this.state.editableBook)
    const tempValidate = () => {
      return !!book.title.length && !!book.authorId && Number.isInteger(book.authorId) && book.authorId >= 0
    }

    if (tempValidate()) {
      try {
        await this.props.updateBook(book)
        this.setState({ editing: false })
      } catch (err) {
        console.log('handle error:')
        console.dir(err.message)
      }
    }
  }

  /**
   * Enables 'editing' state and sets the editable book's value
   * to the current book from the store.
   */
  handleEditClick () {
    this.setState({
      editing: true,
      editableBook: Object.assign(this.props.book),
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
    const { authors } = this.props
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
            authors={authors}
            book={this.state.editableBook}
            handleAuthorChange={this.handleAuthorChange}
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
  authors: array.isRequired,
  book: shape({
    id: number,
    title: string,
    author: shape({
      name: string,
    }),
    createdAt: string,
    updatedAt: string,
  }),
  fetchBooks: func.isRequired,
  updateBook: func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  const bookID = ownProps.match.params.id
  const book = state.books.data.find((a) => Number(a.id) === Number(bookID)) || bookModel.empty()

  return {
    authors: state.authors.data,
    book,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBooks () {
    return dispatch(fetchBooks())
  },

  updateBook (book) {
    return dispatch(updateBook(book))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(RequiresAuth(BookDetailPage))
