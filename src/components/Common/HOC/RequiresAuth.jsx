/*
A simple HOC to allow a component to check out authentication before being mounted.
If the user is not authenticated, the component will redirect to the specified path.
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bool } from 'prop-types'

export default function (WrappedComponent, redirectTo) {
  class RequiresAuth extends Component {
    render () {
      const component = this.props.loggedIn ? <WrappedComponent {...this.props} /> : <Redirect to={redirectTo} />
      return component
    }
  }

  RequiresAuth.propTypes = {
    loggedIn: bool.isRequired
  }

  function mapStateToProps (state, ownProps) {
    return {
      loggedIn: !!state.auth.token
    }
  }

  return connect(mapStateToProps)(RequiresAuth)
}
