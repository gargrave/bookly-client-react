import React, { Component } from 'react'
import { connect } from 'react-redux'

import { localUrls } from '../../../constants/urls'
import requiresAuth from '../../Common/HOC/RequiresAuth'

class AuthorsListPage extends Component {
  render () {
    return (
      <div>
        <h2>AuthorsListPage</h2>
      </div>
    )
  }
}

AuthorsListPage.propTypes = {}

const mapStateToProps = (state, ownProps) => ({})

export default connect(mapStateToProps)(requiresAuth(AuthorsListPage, localUrls.login))
