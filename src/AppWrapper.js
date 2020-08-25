import React from 'react';
import App from './App';
import { connect } from 'react-redux';
import { authUser } from './redux/thunkCreators';

class AppWrapper extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.authUser();
  }
  render() {
    console.log(this.props);
    return <App />
  }
}

export default connect(null, {authUser})(AppWrapper);