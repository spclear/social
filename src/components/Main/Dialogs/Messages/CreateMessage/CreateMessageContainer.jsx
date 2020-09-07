import { connect } from 'react-redux';
import CreateMessage from './CreateMessage';
import { reset } from 'redux-form';
import { sendMessage } from '../../../../../redux/actionCreators';

export default connect(null, { sendMessage, reset })(CreateMessage);
