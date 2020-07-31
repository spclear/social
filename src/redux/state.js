import postsData from './PostListData/postlistData';
import dialogsData from './DialogsData/dialogsData';
import friends from './FriendsList/friendsData'

let state = {
  profilePage: {
    postsData: postsData,
  },
  dialogsPage: {
    dialogsData: dialogsData,
  },
  friends: friends,
}

export default state;