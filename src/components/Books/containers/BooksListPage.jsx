import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func } from 'prop-types'

import { localUrls } from '../../../constants/urls'
import { fetchBooks } from '../../../store/actions/book-actions'
import requiresAuth from '../../Common/HOC/RequiresAuth'

class BooksListPage extends Component {
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

  render () {
    return (
      <div>
        <h2>BooksListPage</h2>
      </div>
    )
  }
}

BooksListPage.propTypes = {
  fetchBooks: func
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBooks () {
    return dispatch(fetchBooks())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(requiresAuth(BooksListPage, localUrls.login))
