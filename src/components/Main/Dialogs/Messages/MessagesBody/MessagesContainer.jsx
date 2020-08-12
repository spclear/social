import { connect } from 'react-redux';
import Messages from '../Messages';

const userId = '084926135';

let mapStateToProps = (state) => {
  return {
    userName: state.profilePage.getName(userId),
    userId: userId,
  }
}

let MessagesContainer = connect(mapStateToProps)(Messages);

export default MessagesContainer;