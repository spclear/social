import { connect } from 'react-redux';
import CreateMessage from './CreateMessage';
import { sendMessage }
  from '../../../../../redux/actionCreators';

export default connect(null, { sendMessage })(CreateMessage);
