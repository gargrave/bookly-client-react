import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { func } from 'prop-types'

import { setInitialized } from '../store/actions/app-actions'
import { fetchProfile } from '../store/actions/auth-actions'
import SimpleHeader from './Header/SimpleHeader'
import Routes from './Routes'

class AppWrapper extends Component {
  async componentWillMount () {
    const token = localStorage.getItem('authToken')
    if (token) {
      await this.props.fetchProfile(token)
    }

    setTimeout(() => {
      this.props.setInitialized()
    }, 1000)
  }

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Bookly</h1>
          <SimpleHeader />
          <Routes />
        </div>
      </BrowserRouter>
    )
  }
}

AppWrapper.propTypes = {
  fetchProfile: func.isRequired,
  setInitialized: func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProfile (token) {
    return dispatch(fetchProfile(token))
  },

  setInitialized () {
    return dispatch(setInitialized())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper)
