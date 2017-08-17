import React, { Component } from 'react'
import { connect } from 'react-redux'
import { number, shape, string } from 'prop-types'

import authorModel from '../../../models/Author.model'
import AuthorDetailView from '../components/AuthorDetailView'
import AuthorEditView from '../components/AuthorEditView'

class AuthorDetailPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      editing: false,
      editableAuthor: authorModel.empty()
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleInputChange (event) {
    const key = event.target.name
    if (key in this.state.editableAuthor) {
      let editableAuthor = Object.assign({}, this.state.editableAuthor)
      editableAuthor[key] = event.target.value
      this.setState({ editableAuthor })
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('TODO: implement AuthorDetailPage.handleSubmit()')
  }

  /**
   * Enables 'editing' state and sets the editable author's value
   * to the current author from the store.
   */
  handleEditClick () {
    this.setState({
      editing: true,
      editableAuthor: {
        firstName: this.props.author.firstName,
        lastName: this.props.author.lastName
      }
    })
  }

  /**
   * Disables 'editing' state.
   */
  handleCancel (event) {
    event.preventDefault()
    this.setState({ editing: false })
  }

  render () {
    const { editing } = this.state
    return (
      <div>
        {!editing && <AuthorDetailView author={this.props.author} handleEditClick={this.handleEditClick} />}
        {editing &&
          <AuthorEditView
            author={this.state.editableAuthor}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            handleCancel={this.handleCancel}
          />}
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
