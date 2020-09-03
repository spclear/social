import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withScrollToTopOnLoad } from '../../hoc/withScrollToTopOnLoad';
import  ProfilePage from './ProfilePage';

export default compose(
  withAuthRedirect,
  withScrollToTopOnLoad
)(ProfilePage)