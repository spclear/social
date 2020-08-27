import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile';
import { compose } from 'redux';
import { getUserProfile, getCurrentUserStatus, updateCurrentUserStatus, authUser, }
  from '../../../../redux/thunkCreators';


class ProfileContainer extends Component {
  componentDidMount() {
    const urlId = this.props.match.params.userId;
    this.props.getUserProfile(urlId, this.props.currentUser);
    this.props.getCurrentUserStatus(urlId || this.props.currentUser);
    // if (this.props.currentUser) {
    // }
  }

  render() {
    return (
      <Profile {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.profilePage.currentShownUser,
    currentUserInfo: state.profilePage.currentUserInfo,
    currentUserStatus: state.profilePage.currentUserStatus,
    isLoading: state.usersPage.isLoading,
  }
}
const actionCreators = {
  getUserProfile,
  getCurrentUserStatus,
  updateCurrentUserStatus,
  authUser,
}

export default compose(
  connect(mapStateToProps, actionCreators),
  withRouter
)(ProfileContainer);