import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array, func } from 'prop-types'

import { localUrls } from '../../../constants/urls'
import { fetchAuthors } from '../../../store/actions/author-actions'
import requiresAuth from '../../Common/HOC/RequiresAuth'
import AuthorListDetail from '../components/AuthorListDetail'

class AuthorsListPage extends Component {
  componentDidMount () {
    this.refreshAuthors()
  }

  async refreshAuthors () {
    try {
      await this.props.fetchAuthors()
    } catch (err) {
      // TODO handle error
    }
  }

  render () {
    return (
      <div>
        <h2>My Authors</h2>
        {this.props.authors.map(author => <AuthorListDetail key={author.id} author={author} />)}
      </div>
    )
  }
}

AuthorsListPage.propTypes = {
  fetchAuthors: func.isRequired,
  authors: array.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  authors: state.authors.data
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAuthors () {
    return dispatch(fetchAuthors())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(requiresAuth(AuthorsListPage, localUrls.login))
