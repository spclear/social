import React from 'react';
import App from './App';
import { connect } from 'react-redux';
import { initializeApp } from './redux/thunkCreators';
import AppLoader from './components/common/AppLoader/AppLoader';
import { compose } from 'redux';
import * as selectors from './redux/selectors';

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
    isInitialized: selectors.getIsInitialized(state),
  }
}

export default compose(
  connect(mapStateToProps, { initializeApp })
)(AppWrapper)