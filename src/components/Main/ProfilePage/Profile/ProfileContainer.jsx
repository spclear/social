import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';
import Profile from './Profile';
import { setCurrentUserInfo, setLoadingStatus }
  from '../../../../redux/actionCreators';

class ProfileContainer extends Component {
  componentDidMount() {
    const userToShow = this.props.match.params.userId || this.props.currentUser;    
    this.props.setLoadingStatus(true);

    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userToShow}`)
      .then(response => {
        this.props.setLoadingStatus(false);
        this.props.setCurrentUserInfo(response.data);
      })
  }

  render() {
    return (
      <Profile {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => {
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