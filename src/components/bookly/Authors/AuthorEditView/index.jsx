// @flow
import React from 'react';
import { func, number, shape, string } from 'prop-types';

import type { Author } from '../../../../constants/flowtypes';

import AuthorForm from '../AuthorForm';
import Card from '../../../common/Card';

type Props = {
  author: Author,
  onCancel: Function,
  onInputChange: Function,
  onSubmit: Function,
};

function AuthorEditView({
  author,
  onCancel,
  onInputChange,
  onSubmit,
}: Props) {
  return (
    <div className="author-edit-view">
      <Card
        classes={['form-card']}
        header={"Update Author"}
        hoverable={false}
      >
        <AuthorForm
          author={author}
          onCancel={onCancel}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
        />
      </Card>
    </div>
  );
}

AuthorEditView.propTypes = {
  author: shape({
    id: number,
    firstName: string,
    lastName: string,
    createdAt: string,
    updatedAt: string,
  }),
  onCancel: func.isRequired,
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
};

export default AuthorEditView;
