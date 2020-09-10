import React, { Component }  from 'react';
import { compose } from "redux";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
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
        loginUser={this.props.loginUser}
        inSubmit={this.props.loginProcessStatus}
        captchaUrl={this.props.captchaUrl}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: selectors.getIsLoggedIn(state),
    loginProcessStatus: selectors.getLoginProcessStatus(state),
    captchaUrl: selectors.getCaptchaUrl(state),
  }
}

export default compose(
  connect(mapStateToProps, {loginUser})
)(LoginPageContainer)