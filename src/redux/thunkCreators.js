import * as actionCreators from './actionCreators';
import { followAPI, usersAPI, authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

export const toggleFollow = (isFollowed, id) => {
  return async (dispatch) => {
    dispatch(actionCreators.setFollowingProgressStatus(id, true));

    let data = isFollowed
      ? await followAPI.unfollow(id)
      : await followAPI.follow(id)

    if (data.resultCode === 0) {
      dispatch(actionCreators.toggleFollow(id));
      dispatch(actionCreators.setFollowingProgressStatus(id, false));
    }
  }
}

export const changePage = (pageNumber, usersNumberToShow) => {
  return async (dispatch) => {
    dispatch(actionCreators.switchPage(pageNumber));
    dispatch(actionCreators.setLoadingStatus(true));

    let data = await usersAPI.getUsers(usersNumberToShow, pageNumber)
    dispatch(actionCreators.setUsers(data.items));
    dispatch(actionCreators.setLoadingStatus(false));
  }
}

export const getUsers = (numberToShow) => {
  return async (dispatch) => {
    dispatch(actionCreators.setLoadingStatus(true));
    dispatch(actionCreators.toFirstPage());

    let data = await usersAPI.getUsers(numberToShow, 1);

    dispatch(actionCreators.setUsersTotal(data.totalCount));
    dispatch(actionCreators.setUsers(data.items));
    dispatch(actionCreators.setLoadingStatus(false));
  }
}

export const authUser = () => async (dispatch) => {
  let data = await authAPI.isAuth();

  if (data.resultCode === 0) {
    dispatch(actionCreators.setLoggedStatus(true));
    dispatch(actionCreators.setCurrentUser(data.data.id));
    dispatch(actionCreators.setLoggedUserDetails(data.data));

    let response = await usersAPI.getProfile(data.data.id);
    
    dispatch(actionCreators.setLoggedUserInfo(response.data));
  }
}

export const getUserProfile = (userId, currentUserId) => {
  return async (dispatch) => {
    let userToShow = userId || currentUserId;
    dispatch(actionCreators.setLoadingStatus(true));

    if (!userToShow) {
      let data = await authAPI.isAuth();
      if (data.resultCode === 0) {
        userToShow = data.data.id;
      }
    }

    let response = await usersAPI.getProfile(userToShow);
    dispatch(actionCreators.setCurrentUserInfo(response.data));
    dispatch(actionCreators.setLoadingStatus(false));
  }
}

export const getCurrentUserStatus = (userId, currentUserId) => {
  return async (dispatch) => {
    let user = userId || currentUserId;

    if (!user) {
      let data = await authAPI.isAuth()
      if (data.resultCode === 0) {
        user = data.data.id;
      }
    }
    
    let response = await usersAPI.getStatus(user)
    dispatch(actionCreators.setCurrentUserStatus(response.data));
  }
}

export const updateCurrentUserStatus = (status) => {
  return async (dispatch) => {
    let response = await usersAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(actionCreators.setCurrentUserStatus(status));
    }
  }
} 

export const loginUser = (loginInfo) => {
  return async (dispatch) => {
    dispatch(actionCreators.setLoginProcessStatus(true));
    let response = await authAPI.login(loginInfo);

    if (response.data.resultCode === 0) {
      dispatch(authUser());
    } else {
      dispatch(stopSubmit("loginForm", {_error: response.data.messages[0]}));
    }

    dispatch(actionCreators.setLoginProcessStatus(false));
  }
}

export const logoutUser = () => {
  return async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
      dispatch(actionCreators.setCurrentUser(null));
      dispatch(actionCreators.setLoggedStatus(false));
      dispatch(actionCreators.setLoggedUserDetails(null));
    }
  }
}

export const uploadPhoto = (photo) => {
  return async (dispatch) => {
    dispatch(actionCreators.setIsPhotoUploading(true));
    const response = await usersAPI.uploadPhoto(photo);

    if (response.resultCode === 0) {
      dispatch(actionCreators.setCurrentUserPhotos(response.data));
    }

    dispatch(actionCreators.setIsPhotoUploading(false));
  }
}

export const updateProfile = (profile) => {
  return async (dispatch) => {
    const response = await usersAPI.updateProfile(profile);
    
    if (response.data.resultCode === 0) {
      dispatch(authUser());
    } else {
      dispatch(stopSubmit("updateProfile", { _error: response.data.messages[0] }));
    }
  }
}

export const initializeApp = () => {
  return (dispatch) => {
    const authPromise = dispatch(authUser());

    Promise.all([authPromise]).then(() => {
      dispatch(actionCreators.setInitializationStatus());
    })
  }
}