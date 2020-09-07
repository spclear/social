import React, { Component }  from 'react';
import { compose } from "redux";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { reset } from 'redux-form';
import LoginPage from "./LoginPage";
import { loginUser } from "../../../redux/thunkCreators"
import * as selectors from '../../../redux/selectors';

class LoginPageContainer extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to='/profile' />
    }
    return (
      <LoginPage
        reset={this.props.reset}
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
  connect(mapStateToProps, {loginUser, reset})
)(LoginPageContainer)