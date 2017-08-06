import React, { Component } from 'react'
import { connect } from 'react-redux'

import { localUrls } from '../../../constants/urls'
import requiresAuth from '../../Common/HOC/RequiresAuth'

class AccountPage extends Component {
  render () {
    return (
      <div>
        <h2>Account Page</h2>
      </div>
    )
  }
}

AccountPage.propTypes = {}

const mapStateToProps = (state, ownProps) => ({})

export default connect(mapStateToProps)(requiresAuth(AccountPage, localUrls.login))
