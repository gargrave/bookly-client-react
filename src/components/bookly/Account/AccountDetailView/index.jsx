import React from 'react'
import { shape, string } from 'prop-types'

const AccountDetailView = ({ user }) => {
  return (
    <div className="account-detail-view">
      <h2>My Account</h2>
      <p className="email-display">
        <strong>Email: </strong>
        {user.email}
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
