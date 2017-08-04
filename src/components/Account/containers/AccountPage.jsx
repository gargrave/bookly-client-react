import React, { Component } from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
