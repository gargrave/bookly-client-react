import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array, func, object } from 'prop-types'

import bookModel from '@/models/Book.model'
import { localUrls } from '@/constants/urls'
import { fetchAuthors } from '@/store/actions/author-actions'
import RequiresAuth from '@/components/common/hocs/RequiresAuth'

import BookForm from '@/components/bookly/books/BookForm'

class BookCreatePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      author: { id: 51 },
      book: bookModel.empty(),
    }

    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  async componentDidMount () {
    try {
      await this.props.fetchAuthors()
    } catch (err) {
      console.log('TODO: handle error!')
      console.log(err)
    }
  }

  handleAuthorChange (event) {
    const selectedAuthorId = Number(event.target.value)
    const author = this.props.authors.find((a) => a.id === selectedAuthorId)

    if (author) {
      this.setState({
        author,
      })
    }
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
    console.log('TODO: need to Author select to BookForm')
  }

  handleCancel (event) {
    event.preventDefault()
    this.props.history.push(localUrls.booksList)
  }

  render () {
    const { author, book } = this.state
    const { authors } = this.props
    return (
      <div>
        <h2>BookCreatePage</h2>
        <BookForm
          authors={authors}
          book={book}
          handleAuthorChange={this.handleAuthorChange}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          handleCancel={this.handleCancel}
          selectedAuthorId={author.id}
        />
      </div>
    )
  }
}

BookCreatePage.propTypes = {
  history: object,
  authors: array.isRequired,
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
})

export default connect(mapStateToProps, mapDispatchToProps)(RequiresAuth(BookCreatePage))
