import * as actionCreators from './actionCreators';
import { followAPI, usersAPI } from '../api/api';

export const toggleFollow = (isFollowed, id) => {
  return (dispatch) => {
    dispatch(actionCreators.setFollowingProgressStatus(id, true));
    if (!isFollowed) {
      followAPI.follow(id).then(data => {
        if (data.resultCode === 0) {
          dispatch(actionCreators.toggleFollowTwo(id));
          dispatch(actionCreators.setFollowingProgressStatus(id, false));
        }
      })
    } else {
      followAPI.unfollow(id).then(data => {
        if (data.resultCode === 0) {
          dispatch(actionCreators.toggleFollowTwo(id));
          dispatch(actionCreators.setFollowingProgressStatus(id, false));
        }
      })
    }
  }
}

export const changePage = (pageNumber, usersNumberToShow) => {
  return (dispatch) => {
    dispatch(actionCreators.switchPage(pageNumber));
    dispatch(actionCreators.setLoadingStatus(true));
    usersAPI.getUsers(usersNumberToShow, pageNumber)
      .then(data => {
        dispatch(actionCreators.setUsers(data.items));
        dispatch(actionCreators.setLoadingStatus(false));
      })
  }
}

export const getUsers = (numberToShow) => {
  return (dispatch) => {
    dispatch(actionCreators.toFirstPage());
    dispatch(actionCreators.setLoadingStatus(true));

    usersAPI.getUsers(numberToShow, 1)
      .then(data => {
        dispatch(actionCreators.setUsersTotal(data.totalCount));
        dispatch(actionCreators.setUsers(data.items));
        dispatch(actionCreators.setLoadingStatus(false));
      })
  }
}

export const checkIfAuth = () => {
  return (dispatch) => {
    usersAPI.isAuth().then(data => {
      if (data.resultCode === 0) {
        dispatch(actionCreators.setLoggedStatus(true));
        dispatch(actionCreators.setCurrentUser(data.data.id));
        dispatch(actionCreators.setLoggedUserDetails(data.data));
      }
    })
  }
}

export const showUser = (userId, currentUserId) => {
  return (dispatch) => {
    let userToShow = userId || currentUserId;
    dispatch(actionCreators.setLoadingStatus(true));

    if (!userToShow) {
      usersAPI.isAuth()
        .then(data => {
          if (data.resultCode === 0) {
            return data.data.id;
          }
        })
        .then(id => {
          usersAPI.getProfile(id).then(data => {
            dispatch(actionCreators.setLoadingStatus(false));
            dispatch(actionCreators.setCurrentUserInfo(data));
          })
        })
    } else {
      usersAPI.getProfile(userToShow).then(data => {
        dispatch(actionCreators.setLoadingStatus(false));
        dispatch(actionCreators.setCurrentUserInfo(data));
      })
    }
  }
}