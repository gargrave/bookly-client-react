import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array, func, object } from 'prop-types'

import { localUrls } from '@/constants/urls'
import { fetchAuthors } from '@/store/actions/author-actions'

import Button from '@/components/common/Button'
import RequiresAuth from '@/components/common/hocs/RequiresAuth'
import AuthorList from '@/components/bookly/authors/AuthorList'

class AuthorsListPage extends Component {
  constructor (props) {
    super(props)

    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleAuthorClick = this.handleAuthorClick.bind(this)
  }

  componentDidMount () {
    this.refreshAuthors()
  }

  async refreshAuthors () {
    try {
      await this.props.fetchAuthors()
    } catch (err) {
      // TODO: handle error
    }
  }

  handleAddClick () {
    this.props.history.push(localUrls.authorCreate)
  }

  handleAuthorClick (authorID) {
    this.props.history.push(`/authors/${authorID}`)
  }

  render () {
    const { authors } = this.props
    return (
      <div>
        <h2>
          My Authors
          <Button
            onClick={this.handleAddClick}
            text="Add"
            type="success" />
        </h2>
        <AuthorList
          authors={authors}
          onAuthorClick={this.handleAuthorClick} />
      </div>
    )
  }
}

AuthorsListPage.propTypes = {
  history: object.isRequired,
  fetchAuthors: func.isRequired,
  authors: array.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  authors: state.authors.data,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAuthors () {
    return dispatch(fetchAuthors())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(RequiresAuth(AuthorsListPage, localUrls.login))
