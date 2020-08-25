import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class HeaderContainer extends Component {
  render() {
    return (
      <Header
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

export default connect(mapStateToProps)(HeaderContainer);