import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../../../redux/thunkCreators';

class ProfileContainer extends Component {
  componentDidMount() {
    const urlId = this.props.match.params.userId;
    this.props.getUserProfile(urlId, this.props.currentUser);
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
const actionCreators = { getUserProfile, }

export default connect(mapStateToProps, actionCreators)(withRouter(ProfileContainer));