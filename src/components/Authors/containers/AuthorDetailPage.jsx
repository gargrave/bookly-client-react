import React, { Component } from 'react'
import { connect } from 'react-redux'
import { number, shape, string } from 'prop-types'

import AuthorDetailView from '../components/AuthorDetailView'

class AuthorDetailPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      editing: false
    }

    this.handleEditClick = this.handleEditClick.bind(this)
  }

  handleEditClick (event) {
    this.setState({ editing: true })
  }

  render () {
    const { author } = this.props
    const { editing } = this.state
    return (
      <div>
        {!editing && <AuthorDetailView author={author} handleEditClick={this.handleEditClick} />}
        {editing && <p>(Editing View)</p>}
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
