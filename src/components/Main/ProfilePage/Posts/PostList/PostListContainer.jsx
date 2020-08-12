import { connect } from "react-redux";
import PostList from "./PostList";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsList,
    getName: (id) => {
      return state.profilePage.getName(id);
    },
    getAvatar: (id) => {
      return state.profilePage.getAvatar(id);
    },
  }
}

const PostListContainer = connect(mapStateToProps)(PostList);

export default PostListContainer;