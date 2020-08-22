import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import Header from './Header';
import { setLoggedStatus, setCurrentUser, setLoggedUserDetails }
  from '../../redux/actionCreators'
import { usersAPI } from '../../api/api';

class HeaderContainer extends Component {
  componentDidMount() {
    usersAPI.isAuth().then(data => {
      if (data.resultCode === 0) {
        this.props.setLoggedStatus(true);
        this.props.setCurrentUser(data.data.id);
        this.props.setLoggedUserDetails(data.data);
      }
    })
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
const actionCreators = {
  setLoggedStatus,
  setCurrentUser,
  setLoggedUserDetails,
}

export default connect(mapStateToProps, actionCreators)(HeaderContainer);