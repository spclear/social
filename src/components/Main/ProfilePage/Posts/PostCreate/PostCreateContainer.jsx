import { connect } from 'react-redux';
import PostCreate from './PostCreate';
import { addPostAC, updatePostInputAC }
  from '../../../../../redux/actionCreators';

let mapStateToProps = (state) => {
  return {
    value: state.profilePage.currentPostField,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    update: (value) => {
      dispatch(updatePostInputAC(value));
    },
    addPost: () => {
      dispatch(addPostAC());
    }
  }
}

const PostCreateContainer =
  connect(mapStateToProps, mapDispatchToProps)(PostCreate);

export default PostCreateContainer;