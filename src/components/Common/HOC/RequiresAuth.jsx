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
    content () {
      if (this.props.initialized) {
        return this.props.loggedIn ? <WrappedComponent {...this.props} /> : <Redirect to={redirectTo} />
      } else {
        return <p>Loading...</p>
      }
    }

    render () {
      return this.content()
    }
  }

  RequiresAuth.propTypes = {
    initialized: bool.isRequired,
    loggedIn: bool.isRequired
  }

  function mapStateToProps (state, ownProps) {
    return {
      initialized: state.app.initialized,
      loggedIn: !!state.auth.token
    }
  }

  return connect(mapStateToProps)(RequiresAuth)
}
