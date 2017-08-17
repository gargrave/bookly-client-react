import React, { Component } from 'react'
import { connect } from 'react-redux'
import { number, shape, string } from 'prop-types'

import AuthorDetailView from '../components/AuthorDetailView'

class AuthorDetailPage extends Component {
  render () {
    const { author } = this.props
    return (
      <div>
        <AuthorDetailView author={author} />
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
