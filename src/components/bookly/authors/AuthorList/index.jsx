// @flow
import React from 'react';
import { array, func } from 'prop-types';

import type { Author } from '../../../../constants/flowtypes';

import Alert from '../../../common/Alert/';
import AuthorListDetail from '../AuthorListDetail';
import CardList from '../../../common/CardList';

type Props = {
  authors: Author[],
  onAuthorClick: Function,
};

function authorList(
  authors: Author[],
  onAuthorClick: Function
) {
  return (
    <CardList>
      {authors.map((author) =>
        <AuthorListDetail
          author={author}
          key={author.id}
          onClick={onAuthorClick.bind(null, author.id)}
        />
      )}
    </CardList>
  );
}

function noAuthorsMessage() {
  return (
    <Alert
      message={'No Authors created yet!'}
      type={'info'}
    />
  );
}

function AuthorList({
  authors,
  onAuthorClick,
}: Props) {
  return (
    authors.length ? authorList(authors, onAuthorClick) : noAuthorsMessage()
  );
}

AuthorList.propTypes = {
  authors: array.isRequired,
  onAuthorClick: func.isRequired,
};

export default AuthorList;
