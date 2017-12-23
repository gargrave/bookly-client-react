// @flow
import React from 'react';
import { array, bool, func, object, shape, string } from 'prop-types';

import type { Author, Book } from '../../../../constants/flowtypes';

import { buildClasses } from '../../../../utils/cssHelpers';

import AuthorSelect from '../../authors/AuthorSelect';
import Button from '../../../common/Button';
import InputField from '../../../common/InputField';

import '../../../common/Form/styles.css';

type Props = {
  authors: Author[],
  book: Book,
  disabled: boolean,
  onAuthorChange: Function,
  onCancel: Function,
  onInputChange: Function,
  onSubmit: Function,
}

function BookForm({
  authors,
  book,
  disabled,
  onAuthorChange,
  onCancel,
  onInputChange,
  onSubmit,
}: Props) {
  return (
    <form
      className={buildClasses(['form', 'book-form'])}
      onSubmit={onSubmit}
      noValidate>

      <InputField
        boundValue={book.title}
        disabled={disabled || false}
        label="Title"
        name="title"
        onInputChange={onInputChange}
      />

      <AuthorSelect
        author={book.author}
        authors={authors}
        disabled={disabled || false}
        onChange={onAuthorChange}
      />

      <div className="input-field">
        <Button
          canSubmit={true}
          disabled={disabled || false}
          onClick={onSubmit}
          position="left"
          text="Submit"
          type="success"
        />

        <Button
          classes="float-right"
          onClick={onCancel}
          text="Cancel"
          type="light"
        />
      </div>
    </form>
  );
}

BookForm.propTypes = {
  authors: array.isRequired,
  book: shape({
    title: string.isRequired,
    author: object.isRequired,
  }).isRequired,
  disabled: bool,
  onAuthorChange: func.isRequired,
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
};

export default BookForm;
