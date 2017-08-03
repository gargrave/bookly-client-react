import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func } from 'prop-types'

import { login } from '../../../store/actions/auth-actions'
import LoginForm from '../components/LoginForm'

class LoginPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: '',
        password: ''
      }
    }

    this.login = this.login.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  async login (event) {
    event.preventDefault()
    if (this.state.user.email && this.state.user.password) {
      await this.props.login(this.state.user)
      console.log('logged in!')
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
        <h2>LoginPage</h2>
        <LoginForm user={this.state.user} handleInputChange={this.handleInputChange} handleLogin={this.login} />
      </div>
    )
  }
}

LoginPage.propTypes = {
  login: func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  login (user) {
    return dispatch(login(user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
