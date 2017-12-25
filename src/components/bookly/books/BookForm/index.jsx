// @flow
import React from 'react';
import { array, bool, func, object, shape, string } from 'prop-types';

import type { Author, Book } from '../../../../constants/flowtypes';

import AuthorSelect from '../../authors/AuthorSelect';
import Form from '../../../common/Form';
import InputField from '../../../common/InputField';

type Props = {
  authors: Author[],
  book: Book,
  disabled?: boolean,
  onAuthorChange: Function,
  onCancel: Function,
  onInputChange: Function,
  onSubmit: Function,
};

function BookForm({
  authors,
  book,
  disabled = false,
  onAuthorChange,
  onCancel,
  onInputChange,
  onSubmit,
}: Props) {
  return (
    <Form
      classes={['book-form']}
      dislabed={disabled}
      onCancel={onCancel}
      onSubmit={onSubmit}
    >
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
    </Form>
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
  onCancel: func.isRequired,
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
};

export default BookForm;
