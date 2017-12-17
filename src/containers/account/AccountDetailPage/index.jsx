import React, { Component } from 'react'
import { connect } from 'react-redux'
import { object } from 'prop-types'

import { localUrls } from '@/constants/urls'
import { logout } from '@/store/actions/auth-actions'

import RequiresAuth from '@/components/common/hocs/RequiresAuth'
import AccountDetailView from '@/components/bookly/account/AccountDetailView'

class AccountDetailPage extends Component {
  constructor (props) {
    super(props)

    this.onLogoutClick = this.onLogoutClick.bind(this)
  }

  async onLogoutClick (event) {
    event.preventDefault()
    await this.props.logout()
    this.props.history.push(localUrls.login)
  }

  render () {
    const { user } = this.props
    return (
      <AccountDetailView
        onLogoutClick={this.onLogoutClick}
        user={user} />
    )
  }
}

AccountDetailPage.propTypes = {
  history: object.isRequired,
  user: object.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  user: state.auth.user,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout () {
    return dispatch(logout())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(RequiresAuth(AccountDetailPage, localUrls.login))
