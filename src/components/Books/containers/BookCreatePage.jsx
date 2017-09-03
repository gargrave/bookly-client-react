import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookCreatePage extends Component {
  render () {
    return (
      <div>
        <h2>BookCreatePage</h2>
      </div>
    )
  }
}

BookCreatePage.propTypes = {}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(BookCreatePage)
