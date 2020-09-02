import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';
import {logoutUser} from '../../redux/thunkCreators'

class HeaderContainer extends Component {
  logout = () => {
    this.props.logoutUser();
  }

  render() {
    return (
      <Header
        logout={this.logout}
        isLoggedIn={this.props.isLoggedIn}
        userDetails={this.props.userDetails}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    userDetails: state.auth.currentUserDetails,
  }
}

export default compose(
  connect(mapStateToProps, { logoutUser })
)(HeaderContainer);