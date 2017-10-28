import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array, func, object } from 'prop-types'

import { localUrls } from '../../../constants/urls'
import { fetchBooks } from '../../../store/actions/book-actions'
import requiresAuth from '../../common/hocs/RequiresAuth'

import BookListDetail from '../components/BookListDetail'

class BooksListPage extends Component {
  constructor (props) {
    super(props)

    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleBookClick = this.handleBookClick.bind(this)
  }

  componentDidMount () {
    this.refreshBooks()
  }

  async refreshBooks () {
    try {
      await this.props.fetchBooks()
    } catch (err) {
      console.log('TODO: handle error!')
      console.log(err)
    }
  }

  handleAddClick () {
    this.props.history.push(localUrls.bookCreate)
  }

  handleBookClick (bookID) {
    this.props.history.push(`/books/${bookID}`)
  }

  render () {
    return (
      <div>
        <h2>
          My Books
          <button className="button-success" style={{ marginLeft: '10px' }} onClick={this.handleAddClick}>
            Add
          </button>
        </h2>
        {this.props.books.map((book) => (
          <BookListDetail key={book.id} book={book} onClick={() => this.handleBookClick(book.id)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(requiresAuth(BooksListPage, localUrls.login))
