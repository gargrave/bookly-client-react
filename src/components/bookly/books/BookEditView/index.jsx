// @flow
import React from 'react';
import { array, func, number, shape, string } from 'prop-types';

import type { Author, Book } from '../../../../constants/flowtypes';

import BookForm from '../BookForm';

type Props = {
  authors: Author[],
  book: Book,
  onAuthorChange: Function,
  onCancel: Function,
  onInputChange: Function,
  onSubmit: Function,
};

function BookEditView({
  authors,
  book,
  onAuthorChange,
  onCancel,
  onInputChange,
  onSubmit,
}: Props) {
  return (
    <div className="book-edit-view">
      <h2>Edit Book</h2>
      <BookForm
        authors={authors}
        book={book}
        onAuthorChange={onAuthorChange}
        onCancel={onCancel}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

BookEditView.propTypes = {
  authors: array.isRequired,
  book: shape({
    id: number,
    title: string,
    createdAt: string,
    updatedAt: string,
  }),
  onAuthorChange: func.isRequired,
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
};

export default BookEditView;
