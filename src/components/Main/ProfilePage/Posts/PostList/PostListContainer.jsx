import { connect } from "react-redux";
import PostList from "./PostList";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsList,
    getName: id => state.usersPage.getName(id),
    getAvatar: id => state.usersPage.getAvatar(id),
  }
}

const PostListContainer = connect(mapStateToProps)(PostList);

export default PostListContainer;