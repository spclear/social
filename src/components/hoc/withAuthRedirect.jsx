import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors';

export const withAuthRedirect = (Component) => {
  class ContainerComponent extends React.Component {
    render() {
      if (!this.props.isLoggedIn) {
        return <Redirect to='/login' />
      }
      return <Component {...this.props} />
    }
  }
  const mapStateToProps = (state) => ({isLoggedIn: selectors.getIsLoggedIn(state)})
  
  return connect(mapStateToProps)(ContainerComponent)
}