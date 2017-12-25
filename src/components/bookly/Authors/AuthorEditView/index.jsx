// @flow
import React from 'react';
import { bool, func, number, shape, string } from 'prop-types';

import type { Author } from '../../../../constants/flowtypes';

import AuthorForm from '../AuthorForm';
import Card from '../../../common/Card';

type Props = {
  author: Author,
  errors: Author,
  onCancel: Function,
  onInputChange: Function,
  onSubmit: Function,
  submitDisabled?: boolean,
  topLevelError?: string,
};

function AuthorEditView({
  author,
  errors,
  onCancel,
  onInputChange,
  onSubmit,
  submitDisabled = false,
  topLevelError,
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
          errors={errors}
          onCancel={onCancel}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          submitDisabled={submitDisabled}
          topLevelError={topLevelError}
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
  errors: shape({
    found: bool,
    firstName: string,
    lastName: string,
  }),
  onCancel: func.isRequired,
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
  submitDisabled: bool,
  topLevelError: string,
};

export default AuthorEditView;
