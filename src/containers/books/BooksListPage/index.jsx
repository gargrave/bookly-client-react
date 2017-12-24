// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array, func, object } from 'prop-types';

import type { Book } from '../../../constants/flowtypes';

import { localUrls } from '../../../constants/urls';
import { fetchBooks } from '../../../store/actions/book-actions';

import Button from '../../../components/common/Button';
import BookList from '../../../components/bookly/books/BookList';
import CardList from '../../../components/common/CardList';
import RequiresAuth from '../../../components/common/hocs/RequiresAuth';

type Props = {
  books: Book[],
  fetchBooks: Function,
  history: Object,
};

class BooksListPage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    const _this: any = this;
    _this.onAddClick = _this.onAddClick.bind(this);
    _this.onBookClick = _this.onBookClick.bind(this);
  }

  componentDidMount() {
    this.refreshBooks();
  }

  async refreshBooks() {
    try {
      await this.props.fetchBooks();
    } catch (err) {
      console.log('TODO: deal with this error!');
      console.log(err);
    }
  }

  onAddClick() {
    this.props.history.push(localUrls.bookCreate);
  }

  onBookClick(bookId?: string | number) {
    if (bookId) {
      this.props.history.push(`/books/${bookId}`);
    }
  }

  render() {
    const {
      books,
    } = this.props;

    return (
      <div>
        <h2>
          My Books
          <Button
            onClick={this.onAddClick}
            text="Add"
            type="success"
          />
        </h2>
        <CardList>
          <BookList
            books={books}
            onBookClick={this.onBookClick}
          />
        </CardList>
      </div>
    );
  }
}

BooksListPage.propTypes = {
  books: array.isRequired,
  fetchBooks: func.isRequired,
  history: object,
};

/* eslint-disable no-unused-vars */
const mapStateToProps = (state, ownProps) => ({
  books: state.books.data,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBooks() {
    return dispatch(fetchBooks());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RequiresAuth(BooksListPage, localUrls.login));
