import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { usersAPI } from '../../../../api/api';
import { setCurrentUserInfo, setLoadingStatus }
from '../../../../redux/actionCreators';
import Profile from './Profile';

class ProfileContainer extends Component {
  componentDidMount() {
    let userToShow = this.props.match.params.userId || this.props.currentUser;
    this.props.setLoadingStatus(true);

    if (!userToShow) {
      usersAPI.isAuth()
        .then(data => {
          if (data.resultCode === 0) {
            return data.data.id;
          }
        })
        .then(id => {
          usersAPI.getProfile(id).then(data => {
            this.props.setLoadingStatus(false);
            this.props.setCurrentUserInfo(data);
          })
        })
    } else {
      usersAPI.getProfile(userToShow).then(data => {
        this.props.setLoadingStatus(false);
        this.props.setCurrentUserInfo(data);
      })
    }
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
    isLoading: state.usersPage.isLoading,
  }
}
const actionCreators = {
  setCurrentUserInfo,
  setLoadingStatus,
}

export default connect(mapStateToProps, actionCreators)(withRouter(ProfileContainer));