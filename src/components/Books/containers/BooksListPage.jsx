import React, { Component } from 'react'
import { connect } from 'react-redux'

import { localUrls } from '../../../constants/urls'
import requiresAuth from '../../Common/HOC/RequiresAuth'

class BooksListPage extends Component {
  render () {
    return (
      <div>
        <h2>BooksListPage</h2>
      </div>
    )
  }
}

BooksListPage.propTypes = {}

const mapStateToProps = (state, ownProps) => ({})

export default connect(mapStateToProps)(requiresAuth(BooksListPage, localUrls.login))
