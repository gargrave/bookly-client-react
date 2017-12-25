// @flow
import React from 'react';
import { bool, func, shape, string } from 'prop-types';

import type { Author } from '../../../../constants/flowtypes';

import Form from '../../../common/Form';
import InputField from '../../../common/InputField';

type Props = {
  author: Author,
  disabled?: boolean,
  errors: Author,
  onCancel: Function,
  onInputChange: Function,
  onSubmit: Function,
};

function AuthorForm({
  author,
  disabled = false,
  errors,
  onCancel,
  onInputChange,
  onSubmit,
}: Props) {
  return (
    <Form
      classes={['author-form']}
      disabled={disabled}
      onCancel={onCancel}
      onSubmit={onSubmit}
    >
      <InputField
        boundValue={author.firstName}
        disabled={disabled}
        error={errors.firstName}
        label="First name"
        name="firstName"
        onInputChange={onInputChange}
      />

      <InputField
        boundValue={author.lastName}
        disabled={disabled}
        error={errors.lastName}
        label="Last name"
        name="lastName"
        onInputChange={onInputChange}
      />
    </Form>
  );
}

AuthorForm.propTypes = {
  author: shape({
    firstName: string.isRequired,
    lastName: string.isRequired,
  }).isRequired,
  disabled: bool,
  errors: shape({
    firstName: string.isRequired,
    lastName: string.isRequired,
  }).isRequired,
  onCancel: func.isRequired,
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
};

export default AuthorForm;
