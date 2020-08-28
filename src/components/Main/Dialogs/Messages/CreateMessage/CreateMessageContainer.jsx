import { connect } from 'react-redux';
import CreateMessage from './CreateMessage';
import { sendMessage }
  from '../../../../../redux/actionCreators';

const idSelf = "641006348";

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendMessage: (message) => {
      dispatch(sendMessage(ownProps.userId, idSelf, message))
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateMessage);
