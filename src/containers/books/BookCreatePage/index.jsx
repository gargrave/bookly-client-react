import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array, func, object } from 'prop-types'

import bookModel from '@/models/Book.model'
import { localUrls } from '@/constants/urls'
import { fetchAuthors } from '@/store/actions/author-actions'
import { createBook } from '@/store/actions/book-actions'
import RequiresAuth from '@/components/common/hocs/RequiresAuth'

import BookForm from '@/components/bookly/books/BookForm'

class BookCreatePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      book: bookModel.empty(),
    }

    this.onAuthorChange = this.onAuthorChange.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
  }

  async componentDidMount () {
    try {
      await this.props.fetchAuthors()
    } catch (err) {
      console.log('TODO: deal with this error!')
      console.log(err)
    }
  }

  onAuthorChange (event) {
    const authorId = Number(event.target.value)
    const author = this.props.authors.find((a) => a.id === authorId)

    if (author) {
      this.setState({
        book: Object.assign({}, this.state.book, { author }),
      })
    }
  }

  onInputChange (event) {
    const key = event.target.name
    const book = Object.assign({}, this.state.book)

    if (key in book) {
      book[key] = event.target.value
      this.setState({ book })
    }
  }

  async onSubmit (event) {
    event.preventDefault()
    const book = bookModel.toAPI(this.state.book)
    const tempValidate = () => {
      return !!book.title.length && !!book.authorId && Number.isInteger(book.authorId) && book.authorId >= 0
    }

    if (tempValidate()) {
      try {
        await this.props.createBook(book)
        this.props.history.push(localUrls.booksList)
      } catch (err) {
        console.log('deal with this error:')
        console.dir(err.message)
      }
    }
  }

  onCancel (event) {
    event.preventDefault()
    this.props.history.push(localUrls.booksList)
  }

  render () {
    const { book } = this.state
    const { authors } = this.props

    return (
      <div>
        <h2>Add a Book</h2>
        <BookForm
          authors={authors}
          book={book}
          onAuthorChange={this.onAuthorChange}
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
          onCancel={this.onCancel} />
      </div>
    )
  }
}

BookCreatePage.propTypes = {
  history: object,
  authors: array.isRequired,
  createBook: func.isRequired,
  fetchAuthors: func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    authors: state.authors.data,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAuthors () {
    return dispatch(fetchAuthors())
  },

  createBook (book) {
    return dispatch(createBook(book))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(RequiresAuth(BookCreatePage))
