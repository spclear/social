import { connect } from 'react-redux';
import PostCreate from './PostCreate';
import { addPost } from '../../../../../redux/actionCreators';
import { reset } from 'redux-form';

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { addPost, reset })(PostCreate);