import React from 'react'
import { shape, string } from 'prop-types'
import { format } from 'date-fns'

import { buildClasses } from '@/utils/cssHelpers'

import Card from '@/components/common/Card'

const AccountDetailView = ({ user }) => {
  return (
    <div className={buildClasses('account-detail-view')}>
      <Card
        classes={['detail-card', 'account-detail-card']}
        hoverable={false}
        onClick={() => null}
        title="My Account">
        <p className={buildClasses('card-text')}>
          <strong>Email:</strong> {user.email}
        </p>
        <hr/>
        <p className={buildClasses('card-text')}>
          <strong>Registered:</strong> {format(user.createdAt, 'MMM. DD, YYYY, HH:mm:ss')}
        </p>
        <p className={buildClasses('card-text')}>
          <strong>Updated:</strong> {format(user.updatedAt, 'MMM. DD, YYYY, HH:mm:ss')}
        </p>
      </Card>
    </div>
  )
}

AccountDetailView.propTypes = {
  user: shape({
    email: string.isRequired,
    createdAt: string,
    updatedAtmail: string,
  }).isRequired,
}

export default AccountDetailView
