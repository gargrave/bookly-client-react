// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array, func, object } from 'prop-types'

import type { Author, Book } from '../../../constants/flowtypes'

import { localUrls } from '../../../constants/urls'
import { fetchAuthors } from '../../../store/actions/author-actions'
import { createBook } from '../../../store/actions/book-actions'
import bookModel from '../../../models/Book.model'

import BookForm from '../../../components/bookly/books/BookForm'
import RequiresAuth from '../../../components/common/hocs/RequiresAuth'

type Props = {
  authors: Author[],
  createBook: Function,
  fetchAuthors: Function,
  history: Object,
}

type State = {
  book: Book,
}

class BookCreatePage extends Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      book: bookModel.empty(),
    }

    const _this: any = this
    _this.onAuthorChange = _this.onAuthorChange.bind(this)
    _this.onInputChange = _this.onInputChange.bind(this)
    _this.onSubmit = _this.onSubmit.bind(this)
    _this.onCancel = _this.onCancel.bind(this)
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
          onCancel={this.onCancel}
        />
      </div>
    )
  }
}

BookCreatePage.propTypes = {
  authors: array.isRequired,
  createBook: func.isRequired,
  fetchAuthors: func.isRequired,
  history: object,
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

export default connect(mapStateToProps, mapDispatchToProps)(RequiresAuth(BookCreatePage, localUrls.login))
