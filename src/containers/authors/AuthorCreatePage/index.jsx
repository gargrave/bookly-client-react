// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func, object } from 'prop-types'

import type { Author } from '../../../constants/flowtypes'

import { localUrls } from '../../../constants/urls'
import { createAuthor } from '../../../store/actions/author-actions'
import authorModel from '../../../models/Author.model'

import AuthorForm from '../../../components/bookly/authors/AuthorForm'
import RequiresAuth from '../../../components/common/hocs/RequiresAuth'

type Props = {
  createAuthor: Function,
  history: Object,
}

type State = {
  author: Author,
}

class AuthorCreatePage extends Component<Props, State> {
  constructor (props) {
    super(props)

    this.state = {
      author: authorModel.empty(),
    }

    const _this: any = this
    _this.onCancel = _this.onCancel.bind(this)
    _this.onInputChange = _this.onInputChange.bind(this)
    _this.onSubmit = _this.onSubmit.bind(this)
  }

  onInputChange (event) {
    const key = event.target.name
    if (key in this.state.author) {
      const author = Object.assign({}, this.state.author)
      author[key] = event.target.value
      this.setState({ author })
    }
  }

  async onSubmit (event) {
    event.preventDefault()
    // TODO: temp validation -> fix this nephew......
    if (this.state.author.firstName && this.state.author.lastName) {
      try {
        const author = authorModel.toAPI(this.state.author)
        await this.props.createAuthor(author)
        this.props.history.push(localUrls.authorsList)
      } catch (err) {
        console.log('TODO: deal with this error')
      }
    }
  }

  onCancel (event) {
    event.preventDefault()
    this.props.history.push(localUrls.authorsList)
  }

  render () {
    return (
      <div>
        <h2>Add an Author</h2>
        <AuthorForm
          author={this.state.author}
          onCancel={this.onCancel}
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

AuthorCreatePage.propTypes = {
  createAuthor: func.isRequired,
  history: object,
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  createAuthor (author) {
    return dispatch(createAuthor(author))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(RequiresAuth(AuthorCreatePage, localUrls.login))
