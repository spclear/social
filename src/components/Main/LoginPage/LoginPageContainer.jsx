import React from 'react';
import { connect } from "react-redux";
import LoginPage from "./LoginPage";
import { Component } from "react";
import { loginUser } from "../../../redux/thunkCreators"
import { compose } from "redux";
import { Redirect } from 'react-router-dom';
import * as selectors from '../../../redux/selectors';

class LoginPageContainer extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to='/profile' />
    }
    return (
      <LoginPage
        loginUser={this.props.loginUser}
        inSubmit={this.props.loginProcessStatus}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: selectors.getIsLoggedIn(state),
    loginProcessStatus: selectors.getLoginProcessStatus(state),
  }
}

export default compose(
  connect(mapStateToProps, {loginUser})
)(LoginPageContainer)