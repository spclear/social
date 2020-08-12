import { connect } from 'react-redux';
import PostCreate from './PostCreate';
import { addPostActionCreator, updatePostInputActionCreator }
  from '../../../../../redux/actionCreators';

let mapStateToProps = (state) => {
  return {
    value: state.profilePage.currentPostField,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    update: (value) => {
      dispatch(updatePostInputActionCreator(value));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const PostCreateContainer =
  connect(mapStateToProps, mapDispatchToProps)(PostCreate);

export default PostCreateContainer;