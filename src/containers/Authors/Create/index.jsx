import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func, object } from 'prop-types'

import { localUrls } from '@/constants/urls'
import { createAuthor } from '@/store/actions/author-actions'
import authorModel from '@/models/Author.model'

import AuthorForm from '@/components/Authors/components/AuthorForm'

class AuthorCreatePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      author: authorModel.empty(),
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleInputChange (event) {
    const key = event.target.name
    if (key in this.state.author) {
      const author = Object.assign({}, this.state.author)
      author[key] = event.target.value
      this.setState({ author })
    }
  }

  async handleSubmit (event) {
    event.preventDefault()
    // TODO: temp validation -> fix this nephew......
    if (this.state.author.firstName && this.state.author.lastName) {
      try {
        const author = authorModel.toAPI(this.state.author)
        await this.props.createAuthor(author)
        this.props.history.push(localUrls.authorsList)
      } catch (err) {
        console.log('TODO: handle error')
      }
    }
  }

  handleCancel (event) {
    event.preventDefault()
    this.props.history.push(localUrls.authorsList)
  }

  render () {
    return (
      <div>
        <h2>Add an Author</h2>
        <AuthorForm
          author={this.state.author}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          handleCancel={this.handleCancel}
        />
      </div>
    )
  }
}

AuthorCreatePage.propTypes = {
  history: object,
  createAuthor: func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  createAuthor (author) {
    return dispatch(createAuthor(author))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthorCreatePage)
