import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array, func, object } from 'prop-types'

import { localUrls } from '../../../constants/urls'
import { fetchAuthors } from '../../../store/actions/author-actions'
import Button from '../../common/Button'
import requiresAuth from '../../common/hocs/RequiresAuth'
import AuthorListDetail from '../components/AuthorListDetail'

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
    return (
      <div>
        <h2>
          My Authors
          <Button
            onClick={this.handleAddClick}
            text="Add"
            type="success" />
        </h2>
        {this.props.authors.map((author) =>
          <AuthorListDetail key={author.id} author={author} onClick={() => this.handleAuthorClick(author.id)} />
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(requiresAuth(AuthorsListPage, localUrls.login))
