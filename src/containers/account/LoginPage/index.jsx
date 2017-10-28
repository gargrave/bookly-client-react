import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func, object } from 'prop-types'

import { localUrls } from '@/constants/urls'
import { login } from '@/store/actions/auth-actions'
import RequiresAuth from '@/components/common/hocs/RequiresAuth'

import ErrorAlert from '@/components/common/Alert/ErrorAlert'
import LoginForm from '@/components/bookly/account/LoginForm'

class LoginPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: '',
        password: '',
      },
      apiError: '',
    }

    this.login = this.login.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  async login (event) {
    event.preventDefault()
    if (this.state.user.email && this.state.user.password) {
      try {
        await this.props.login(this.state.user)
        this.props.history.push(localUrls.account)
      } catch (err) {
        this.setState({ apiError: err.message })
      }
    }
  }

  handleInputChange (event) {
    const key = event.target.name
    if (key in this.state.user) {
      const user = this.state.user
      user[key] = event.target.value
      this.setState({ user })
    }
  }

  render () {
    return (
      <div>
        <ErrorAlert error={this.state.apiError} />
        <h2>LoginPage</h2>
        <LoginForm user={this.state.user} handleInputChange={this.handleInputChange} handleSubmit={this.login} />
      </div>
    )
  }
}

LoginPage.propTypes = {
  history: object.isRequired,
  login: func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  login (user) {
    return dispatch(login(user))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(RequiresAuth(LoginPage, localUrls.account, false))
