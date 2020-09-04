import { connect } from "react-redux";
import PostList from "./PostList";
import * as selectors from "../../../../../redux/selectors";

let mapStateToProps = (state) => {
  return {
    posts: selectors.getPostsList(state),
    getName: selectors.getNameGetter(state),
    getAvatar: selectors.getAvatarGetter(state),
  }
}

const PostListContainer = connect(mapStateToProps)(PostList);

export default PostListContainer;