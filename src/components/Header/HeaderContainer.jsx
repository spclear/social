import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import Axios from 'axios';
import Header from './Header';
import { setLoggedStatus, setCurrentUser, setLoggedUserDetails }
  from '../../redux/actionCreators'

class HeaderContainer extends Component {
  componentDidMount() {
    Axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true,
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          this.props.setLoggedStatus(true);
          this.props.setCurrentUser(response.data.data.id);
          this.props.setLoggedUserDetails(response.data.data);
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