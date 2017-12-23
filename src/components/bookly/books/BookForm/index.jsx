// @flow
import React from 'react';
import { array, func, object, shape, string } from 'prop-types';

import type { Author, Book } from '../../../../constants/flowtypes';

import { buildClasses } from '../../../../utils/cssHelpers';

import AuthorSelect from '../../authors/AuthorSelect';
import Button from '../../../common/Button';
import InputField from '../../../common/InputField';

import '../../../common/Form/styles.css';

type Props = {
  authors: Author[],
  book: Book,
  onAuthorChange: Function,
  onCancel: Function,
  onInputChange: Function,
  onSubmit: Function,
}

function BookForm({
  authors,
  book,
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
        label="Title"
        name="title"
        onInputChange={onInputChange}
      />

      <AuthorSelect
        author={book.author}
        authors={authors}
        onChange={onAuthorChange}
      />

      <div className="input-field">
        <Button
          canSubmit={true}
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
  onAuthorChange: func.isRequired,
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
};

export default BookForm;
