// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';

import type { User } from '../../../constants/flowtypes';

import { localUrls } from '../../../constants/urls';
import { login } from '../../../store/actions/auth-actions';

import Card from '../../../components/common/Card';
import LoginForm from '../../../components/bookly/account/LoginForm';
import RequiresAuth from '../../../components/common/hocs/RequiresAuth';

type Props = {
  history: any,
  login: Function,
};

type State = {
  apiError: string,
  user: User,
};

class LoginPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: '',
      },
      apiError: '',
    };

    const _this: any = this;
    _this.login = _this.login.bind(this);
    _this.onInputChange = _this.onInputChange.bind(this);
  }

  async login(event) {
    event.preventDefault();
    if (this.state.user.email && this.state.user.password) {
      try {
        await this.props.login(this.state.user);
        this.props.history.push(localUrls.account);
      } catch (err) {
        this.setState({ apiError: err.message });
      }
    }
  }

  onInputChange(event) {
    const key = event.target.name;
    if (key in this.state.user) {
      const user = this.state.user;
      user[key] = event.target.value;

      this.setState({
        user,
      });
    }
  }

  render() {
    return (
      <Card
        classes={['form-card']}
        header={"Login"}
        hoverable={false}
      >
        <LoginForm
          onCancel={() => null}
          onInputChange={this.onInputChange}
          onSubmit={this.login}
          submitBtnText="Login"
          topLevelError={this.state.apiError}
          user={this.state.user}
        />
      </Card>
    );
  }
}

LoginPage.propTypes = {
  history: object.isRequired,
  login: func.isRequired,
};

/* eslint-disable no-unused-vars */
const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login(user) {
    return dispatch(login(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RequiresAuth(LoginPage, localUrls.account, false));
