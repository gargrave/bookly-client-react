// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array, func, object } from 'prop-types';

import type { Author } from '../../../constants/flowtypes';

import { localUrls } from '../../../constants/urls';
import { fetchAuthors } from '../../../store/actions/author-actions';

import AuthorList from '../../../components/bookly/authors/AuthorList';
import Button from '../../../components/common/Button';
import RequiresAuth from '../../../components/common/hocs/RequiresAuth';

type Props = {
  authors: Author[],
  fetchAuthors: Function,
  history: Object,
};

class AuthorsListPage extends Component<Props> {
  constructor(props) {
    super(props);

    const _this: any = this;
    _this.onAddClick = _this.onAddClick.bind(this);
    _this.onAuthorClick = _this.onAuthorClick.bind(this);
  }

  componentDidMount() {
    this.refreshAuthors();
  }

  async refreshAuthors() {
    try {
      await this.props.fetchAuthors();
    } catch (err) {
      // TODO: deal with this error
    }
  }

  onAddClick() {
    this.props.history.push(localUrls.authorCreate);
  }

  onAuthorClick(authorID) {
    this.props.history.push(`/authors/${authorID}`);
  }

  render() {
    const { authors } = this.props;
    return (
      <div>
        <h2>
          My Authors
          <Button
            onClick={this.onAddClick}
            text="Add"
            type="success"
          />
        </h2>
        <AuthorList
          authors={authors}
          onAuthorClick={this.onAuthorClick}
        />
      </div>
    );
  }
}

AuthorsListPage.propTypes = {
  authors: array.isRequired,
  fetchAuthors: func.isRequired,
  history: object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  authors: state.authors.data,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAuthors() {
    return dispatch(fetchAuthors());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RequiresAuth(AuthorsListPage, localUrls.login));
