// @flow
import React from 'react';
import { func, shape, string } from 'prop-types';

import type { Author } from '../../../../constants/flowtypes';

import { buildClasses } from '../../../../utils/cssHelpers';

import Button from '../../../common/Button';
import InputField from '../../../common/InputField';

import '../../../common/Form/styles.css';

type Props = {
  author: Author,
  onCancel: Function,
  onInputChange: Function,
  onSubmit: Function,
};

function AuthorForm({
  author,
  onCancel,
  onInputChange,
  onSubmit,
}: Props) {
  return (
    <form
      className={buildClasses(['form', 'author-form'])}
      onSubmit={onSubmit}
      noValidate>

      <InputField
        boundValue={author.firstName}
        label="First name"
        name="firstName"
        onInputChange={onInputChange}
      />

      <InputField
        boundValue={author.lastName}
        label="Last name"
        name="lastName"
        onInputChange={onInputChange}
      />

      <div className="input-field">
        <Button
          canSubmit={true}
          onClick={onSubmit}
          position="left"
          text="Submit"
          type="success" />
        <Button
          classes="float-right"
          onClick={onCancel}
          text="Cancel"
          type="info" />
      </div>
    </form>
  );
}

AuthorForm.propTypes = {
  author: shape({
    firstName: string.isRequired,
    lastName: string.isRequired,
  }).isRequired,
  onCancel: func.isRequired,
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
};

export default AuthorForm;
