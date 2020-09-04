import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';
import * as selectors from '../../../redux/selectors';

const mapStateToProps = (state) => {
  return {
    currentDialogId: selectors.getCurrentDialogId(state),
  }
}

export default compose(
  connect(mapStateToProps),
  withAuthRedirect
)(Dialogs);
