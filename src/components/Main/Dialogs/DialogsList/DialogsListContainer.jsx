import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import DialogsList from './DialogsList';
import { setCurrentDialogId } from '../../../../redux/actionCreators'
import { compose } from 'redux';
import * as selectors from '../../../../redux/selectors';

class DialogsListContainer extends Component {
  componentWillUnmount() {
    this.props.setCurrentDialogId(null);
  }
  componentDidMount() {
    this.props.setCurrentDialogId(null);
  }

  render() {
    return (
      <DialogsList {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dialogs: selectors.getUsersDialogs(state),
    getName: selectors.getNameGetter(state),
    getAvatar: selectors.getAvatarGetter(state),
  }
}
const actionCreators = {
  setCurrentDialogId,
}

export default compose(
  connect(mapStateToProps, actionCreators)
)(DialogsListContainer);