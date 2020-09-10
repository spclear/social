import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { uploadPhoto, updateProfile } from '../../../redux/thunkCreators';
import { connect } from 'react-redux';
import Settings from './Settings';
import * as selectors  from '../../../redux/selectors';

const mapStateToProps = (state) => {
  return {
    userInfo: selectors.getLoggedUserInfo(state),
    isPhotoUploading: selectors.getIsPhotoUploading(state),
    isProfileUpdating: selectors.getIsProfileUpdating(state),
  }
}
export default compose(
  connect(mapStateToProps, {uploadPhoto, updateProfile}),
  withAuthRedirect
)(Settings);