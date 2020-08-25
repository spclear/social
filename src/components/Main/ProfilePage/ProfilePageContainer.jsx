import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import  ProfilePage from './ProfilePage';

export default compose(withAuthRedirect)(ProfilePage)