import { connect } from 'react-redux';
import PostCreate from './PostCreate';
import { addPost, updatePostInput }
  from '../../../../../redux/actionCreators';

const mapStateToProps = (state) => {
  return {
    value: state.profilePage.currentPostField,
  }
}
const actionCreators = {
  updatePostInput,
  addPost,
}

const PostCreateContainer = connect(mapStateToProps, actionCreators)(PostCreate);

export default PostCreateContainer;