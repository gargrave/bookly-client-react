import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoginPage extends Component {
  render () {
    return (
      <div>
        <h2>LoginPage</h2>
      </div>
    )
  }
}

LoginPage.propTypes = {}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
