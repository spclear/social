import React from 'react';
import App from './App';
import { connect } from 'react-redux';
import { initializeApp } from './redux/thunkCreators';
import AppLoader from './components/common/AppLoader/AppLoader';
import { compose } from 'redux';

class AppWrapper extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.isInitialized) {
      return <AppLoader />
    }
    return <App />
  }
}

const mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitialized,
  }
}

export default compose(
  connect(mapStateToProps, { initializeApp })
)(AppWrapper)