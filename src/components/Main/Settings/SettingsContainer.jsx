import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { uploadPhoto } from '../../../redux/thunkCreators';
import { connect } from 'react-redux';
import Settings from './Settings';
import * as selectors  from '../../../redux/selectors';

const mapStateToProps = (state) => {
  return {
    isUploading: selectors.getIsPhotoUploading(state),
  }
}
export default compose(
  connect(mapStateToProps, {uploadPhoto}),
  withAuthRedirect
)(Settings);