import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func, number, object, shape, string } from 'prop-types'

import { localUrls } from '@/constants/urls'
import { updateAuthor } from '@/store/actions/author-actions'
import authorModel from '@/models/Author.model'

import AuthorDetailView from '@/components/Authors/AuthorDetailView'
import AuthorEditView from '@/components/Authors/AuthorEditView'

class AuthorDetailPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      editing: false,
      editableAuthor: authorModel.empty(),
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleBackClick = this.handleBackClick.bind(this)
  }

  handleInputChange (event) {
    const key = event.target.name
    if (key in this.state.editableAuthor) {
      let editableAuthor = Object.assign({}, this.state.editableAuthor)
      editableAuthor[key] = event.target.value
      this.setState({ editableAuthor })
    }
  }

  async handleSubmit (event) {
    event.preventDefault()
    // TODO: temp validation -> fix this nephew......
    if (this.state.editableAuthor.firstName && this.state.editableAuthor.lastName) {
      try {
        const author = authorModel.toAPI(Object.assign({}, this.props.author, this.state.editableAuthor))
        await this.props.updateAuthor(author)
        this.setState({ editing: false })
      } catch (error) {
        console.log('TODO: handle error')
      }
    }
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
        lastName: this.props.author.lastName,
      },
    })
  }

  /**
   * Disables 'editing' state.
   */
  handleCancel (event) {
    event.preventDefault()
    this.setState({ editing: false })
  }

  handleBackClick () {
    this.props.history.push(localUrls.authorsList)
  }

  render () {
    const { editing } = this.state
    return (
      <div>
        {!editing &&
          <AuthorDetailView
            author={this.props.author}
            handleEditClick={this.handleEditClick}
            handleBackClick={this.handleBackClick}
          />}
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
  history: object,
  author: shape({
    id: number,
    firstName: string,
    lastName: string,
    createdAt: string,
    updatedAt: string,
  }),
  updateAuthor: func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  const authorID = ownProps.match.params.id
  const author = state.authors.data.find((a) => Number(a.id) === Number(authorID)) || {}

  return {
    author,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateAuthor (author) {
    return dispatch(updateAuthor(author))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDetailPage)
