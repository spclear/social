import React from 'react';
import App from './App';
import { connect } from 'react-redux';
import { authUser } from './redux/thunkCreators';

class AppWrapper extends React.Component {
  componentDidMount() {
    this.props.authUser();
  }
  render() {
    return <App />
  }
}

export default connect(null, {authUser})(AppWrapper);