import React, { Component } from 'react'
import { connect } from 'react-redux'
import { object } from 'prop-types'

import { localUrls } from '../../../constants/urls'
import authorModel from '../../../models/Author.model'
import AuthorForm from '../components/AuthorForm'

class AuthorCreatePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      author: authorModel.empty()
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

  handleSubmit (event) {
    event.preventDefault()
    console.log('TODO: implement AuthorCreatePage.handleSubmit()')
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
  history: object
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AuthorCreatePage)
