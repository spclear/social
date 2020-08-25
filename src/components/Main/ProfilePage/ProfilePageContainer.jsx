import { connect } from 'react-redux';
import  ProfilePage from './ProfilePage';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps)(ProfilePage);