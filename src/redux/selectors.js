// auth reducer
export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getCurrentUserDetails = (state) => state.auth.currentUserDetails;
export const getLoginProcessStatus = (state) => state.auth.loginProcessStatus;

// app reducer
export const getIsInitialized = (state) => state.app.isInitialized;

// navBar reducer
export const getFriendsList = (state) => state.navBar.friends;

// usersPage reducer
export const getNameGetter = (state) => (id) => state.usersPage.getName(id);
export const getAvatarGetter = (state) => (id) => state.usersPage.getAvatar(id);
export const getServerUsersList = (state) => state.usersPage.serverUsersList;
export const getShownUsersNumber = (state) => state.usersPage.shownUsersNumber;
export const getUsersTotal = (state) => state.usersPage.usersTotal;
export const getCurrentPage = (state) => state.usersPage.currentPage;
export const getInFollowingProgress = (state) => state.usersPage.inFollowingProgress;
export const getIsLoading = (state) => state.usersPage.isLoading;

// profilePage reducer 
export const getAuthorizedUser = (state) => state.profilePage.authorizedUser;
export const getShownUser = (state) => state.profilePage.shownUser;
export const getLoggedUser = (state) => state.profilePage.loggedUser;
export const getCurrentUserInfo = (state) => state.profilePage.currentUserInfo;
export const getCurrentUserStatus = (state) => state.profilePage.currentUserStatus;
export const getPostsList = (state) => state.profilePage.postsList;
export const getIsPhotoUploading = (state) => state.profilePage.isPhotoUploading;

// messagesPage reducer
export const getCurrentDialogId = (state) => state.messagesPage.currentDialog;
export const getUsersDialogs = (state) => state.messagesPage.usersDialogs;
export const getDialogGetter = (state) => (id) => state.messagesPage.getDialog(id);