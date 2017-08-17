import React, { Component } from 'react'
import { connect } from 'react-redux'
import { number, shape, string } from 'prop-types'

import AuthorDetailView from '../components/AuthorDetailView'
import AuthorEditView from '../components/AuthorEditView'

class AuthorDetailPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      editing: false
    }

    this.handleEditClick = this.handleEditClick.bind(this)
  }

  /**
   * Toggles the state of 'editing' on the local state.
   */
  handleEditClick (event) {
    this.setState({ editing: !this.state.editing })
  }

  render () {
    const { author } = this.props
    const { editing } = this.state
    return (
      <div>
        {!editing && <AuthorDetailView author={author} handleEditClick={this.handleEditClick} />}
        {editing && <AuthorEditView author={author} handleCancel={this.handleEditClick} />}
      </div>
    )
  }
}

AuthorDetailPage.propTypes = {
  author: shape({
    id: number,
    firstName: string,
    lastName: string,
    createdAt: string,
    updatedAt: string
  })
}

const mapStateToProps = (state, ownProps) => {
  const authorID = ownProps.match.params.id
  const author = state.authors.data.find(a => Number(a.id) === Number(authorID)) || {}

  return {
    author
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDetailPage)
