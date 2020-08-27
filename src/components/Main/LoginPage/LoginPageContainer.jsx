import React from 'react';
import { connect } from "react-redux";
import LoginPage from "./LoginPage";
import { Component } from "react";
import { loginUser } from "../../../redux/thunkCreators"
import { compose } from "redux";
import { Redirect } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';
import styles from './loginpage.module.css';

class LoginPageContainer extends Component {
  render() {
    if (this.props.loginProcessStatus) {
      return <Preloader extraClass={styles.preloader}/>
    } else if (this.props.isLoggedIn) {
      return <Redirect to='/profile' />
    }
    return (
      <LoginPage loginUser={this.props.loginUser} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    loginProcessStatus: state.auth.loginProcessStatus,
  }
}

export default compose(
  connect(mapStateToProps, {loginUser})
)(LoginPageContainer)