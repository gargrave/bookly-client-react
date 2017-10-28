import React from 'react'
import { shape, string } from 'prop-types'

const AccountDetailView = (props) => {
  const { email } = props.user
  return (
    <div className="account-detail-view">
      <h2>AccountDetailView</h2>
      <p className="email-display">
        <strong>Email: </strong>
        {email}
      </p>
    </div>
  )
}

AccountDetailView.propTypes = {
  user: shape({
    email: string.isRequired,
  }).isRequired,
}

export default AccountDetailView
