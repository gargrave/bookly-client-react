import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func, number, object, shape, string } from 'prop-types'

import { localUrls } from '@/constants/urls'
import { fetchAuthors, updateAuthor } from '@/store/actions/author-actions'
import authorModel from '@/models/Author.model'

import RequiresAuth from '@/components/common/hocs/RequiresAuth'
import AuthorDetailView from '@/components/bookly/authors/AuthorDetailView'
import AuthorEditView from '@/components/bookly/authors/AuthorEditView'

const detailView = (author, onBackClick, onEditClick) => (
  <AuthorDetailView
    author={author}
    onBackClick={onBackClick}
    onEditClick={onEditClick}
  />
)

const editView = (author, onCancel, onInputChange, onSubmit) => (
  <AuthorEditView
    author={author}
    onCancel={onCancel}
    onInputChange={onInputChange}
    onSubmit={onSubmit} />
)

class AuthorDetailPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      editing: false,
      editableAuthor: authorModel.empty(),
    }
  }

  componentDidMount () {
    this.refreshAuthors()
  }

  async refreshAuthors () {
    try {
      await this.props.fetchAuthors()
      if (!this.props.author.id) {
        this.props.history.push(localUrls.authorsList)
      }
    } catch (err) {
      // TODO: handle error
      console.log('TODO: handle error in AuthorDetailPage.refreshAuthors():')
      console.dir(err)
    }
  }

  onInputChange (event) {
    const key = event.target.name
    if (key in this.state.editableAuthor) {
      let editableAuthor = Object.assign({}, this.state.editableAuthor)
      editableAuthor[key] = event.target.value
      this.setState({ editableAuthor })
    }
  }

  async onSubmit (event) {
    event.preventDefault()
    // TODO: temp validation -> fix this nephew......
    if (this.state.editableAuthor.firstName && this.state.editableAuthor.lastName) {
      try {
        const author = authorModel.toAPI(Object.assign({}, this.props.author, this.state.editableAuthor))
        await this.props.updateAuthor(author)
        this.setState({ editing: false })
      } catch (err) {
        console.log('TODO: handle error in AuthorDetailPage.onSubmit():')
        console.dir(err)
      }
    }
  }

  /**
   * Enables 'editing' state and sets the editable author's value
   * to the current author from the store.
   */
  onEditClick () {
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
  onCancel (event) {
    event.preventDefault()
    this.setState({ editing: false })
  }

  onBackClick () {
    this.props.history.push(localUrls.authorsList)
  }

  render () {
    const { author } = this.props
    const { editableAuthor, editing } = this.state
    return (
      <div>
        {!editing &&
          detailView(author, this.onBackClick.bind(this), this.onEditClick.bind(this))
        }
        {editing &&
          editView(editableAuthor, this.onCancel.bind(this), this.onInputChange.bind(this), this.onSubmit.bind(this))
        }
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
  fetchAuthors: func.isRequired,
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
  fetchAuthors () {
    return dispatch(fetchAuthors())
  },

  updateAuthor (author) {
    return dispatch(updateAuthor(author))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(RequiresAuth(AuthorDetailPage))
