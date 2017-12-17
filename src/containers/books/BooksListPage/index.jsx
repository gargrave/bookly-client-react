import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array, func, object } from 'prop-types'

import { localUrls } from '@/constants/urls'
import { fetchBooks } from '@/store/actions/book-actions'

import Button from '@/components/common/Button'
import RequiresAuth from '@/components/common/hocs/RequiresAuth'
import BookListDetail from '@/components/bookly/books/BookListDetail'

class BooksListPage extends Component {
  constructor (props) {
    super(props)

    this.onAddClick = this.onAddClick.bind(this)
    this.onBookClick = this.onBookClick.bind(this)
  }

  componentDidMount () {
    this.refreshBooks()
  }

  async refreshBooks () {
    try {
      await this.props.fetchBooks()
    } catch (err) {
      console.log('TODO: deal with this error!')
      console.log(err)
    }
  }

  onAddClick () {
    this.props.history.push(localUrls.bookCreate)
  }

  onBookClick (bookID) {
    this.props.history.push(`/books/${bookID}`)
  }

  render () {
    return (
      <div>
        <h2>
          My Books
          <Button
            onClick={this.onAddClick}
            text="Add"
            type="success" />
        </h2>
        {this.props.books.map((book) => (
          <BookListDetail
            key={book.id}
            book={book}
            onClick={() => this.onBookClick(book.id)} />
        ))}
      </div>
    )
  }
}

BooksListPage.propTypes = {
  history: object,
  fetchBooks: func.isRequired,
  books: array.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  books: state.books.data,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBooks () {
    return dispatch(fetchBooks())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(RequiresAuth(BooksListPage, localUrls.login))
