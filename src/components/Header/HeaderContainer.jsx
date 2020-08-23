import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkIfAuth } from '../../redux/thunkCreators';
import Header from './Header';

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.checkIfAuth();
  }
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
const actionCreators = { checkIfAuth, }

export default connect(mapStateToProps, actionCreators)(HeaderContainer);