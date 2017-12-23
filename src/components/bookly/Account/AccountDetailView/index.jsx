// @flow
import React from 'react';
import { func, shape, string } from 'prop-types';
import { format } from 'date-fns';

import type { User } from '../../../../constants/flowtypes';

import { buildClasses } from '../../../../utils/cssHelpers';

import Button from '../../../common/Button';
import ButtonRow from '../../../common/ButtonRow';
import Card from '../../../common/Card';

type Props = {
  onLogoutClick: Function,
  user: User,
};

function AccountDetailView({
  onLogoutClick,
  user,
}: Props) {
  return (
    <div className={buildClasses('account-detail-view')}>
      <Card
        classes={['detail-card', 'account-detail-card']}
        hoverable={false}
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

        <hr/>

        <ButtonRow>
          <Button
            onClick={onLogoutClick}
            position="left"
            text="Logout"
            type="info"
          />
        </ButtonRow>
      </Card>
    </div>
  );
}

AccountDetailView.propTypes = {
  onLogoutClick: func.isRequired,
  user: shape({
    email: string.isRequired,
    createdAt: string,
    updatedAtmail: string,
  }).isRequired,
};

export default AccountDetailView;
