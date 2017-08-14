import React, { Component } from 'react'
import { connect } from 'react-redux'

class AuthorCreatePage extends Component {
  render () {
    return (
      <div>
        <h2>Add an Author</h2>
      </div>
    )
  }
}

AuthorCreatePage.propTypes = {}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AuthorCreatePage)
