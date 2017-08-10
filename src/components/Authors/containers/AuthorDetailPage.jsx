import React, { Component } from 'react'
import { connect } from 'react-redux'
import { number, shape, string } from 'prop-types'

class AuthorDetailPage extends Component {
  render () {
    const { author } = this.props
    return (
      <div>
        <h2>Author Detail</h2>
        <p>
          <strong>Name:</strong> {author.firstName} {author.lastName}
        </p>
        <p>
          <strong>Added on:</strong> {author.createdAt}
        </p>
        <p>
          <strong>Updated on:</strong> {author.updatedAt}
        </p>
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
