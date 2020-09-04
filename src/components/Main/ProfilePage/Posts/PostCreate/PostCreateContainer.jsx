import { connect } from 'react-redux';
import PostCreate from './PostCreate';
import { addPost }
  from '../../../../../redux/actionCreators';

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { addPost })(PostCreate);