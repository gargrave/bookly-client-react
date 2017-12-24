// @flow
import React from 'react';
import { array, func } from 'prop-types';

import type { Book } from '../../../../constants/flowtypes';

import Alert from '../../../common/Alert/';
import BookListDetail from '../BookListDetail';
import CardList from '../../../common/CardList';

type Props = {
  books: Book[],
  onBookClick: Function,
};

function bookList(
  books: Book[],
  onBookClick: Function
) {
  return (
    <CardList>
      {books.map((book) =>
        <BookListDetail
          book={book}
          key={book.id}
          onClick={onBookClick.bind(null, book.id)}
        />
      )}
    </CardList>
  );
}

function noBooksMessage() {
  return (
    <Alert
      message={'No Books created yet!'}
      type={'info'}
    />
  );
}

function BookList({
  books,
  onBookClick,
}: Props) {
  return (
    books.length ? bookList(books, onBookClick) : noBooksMessage()
  );
}

BookList.propTypes = {
  books: array.isRequired,
  onBookClick: func.isRequired,
};

export default BookList;
