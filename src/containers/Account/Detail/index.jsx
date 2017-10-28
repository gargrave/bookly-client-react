import React, { Component } from 'react'
import { connect } from 'react-redux'
import { object } from 'prop-types'

import { localUrls } from '@/constants/urls'
import { logout } from '@/store/actions/auth-actions'

import RequiresAuth from '@/components/common/hocs/RequiresAuth'
import AccountDetailView from '@/components/bookly/Account/AccountDetailView'

class AccountDetailPage extends Component {
  constructor (props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
  }

  async handleLogout (event) {
    event.preventDefault()
    await this.props.logout()
    this.props.history.push(localUrls.login)
  }

  render () {
    const { user } = this.props
    return (
      <div>
        <h2>Account Page</h2>
        <AccountDetailView user={user} />
        <button onClick={this.handleLogout}>Logout</button>
      </div>
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
