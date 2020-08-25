import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import DialogsList from './DialogsList';
import { setCurrentDialogId } from '../../../../redux/actionCreators'

class DialogsListContainer extends Component {
  componentDidUnmount() {
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
    dialogs: state.messagesPage.usersDialogs,
    getName: id => state.usersPage.getName(id),
    getAvatar: id => state.usersPage.getAvatar(id),
  }
}
const actionCreators = {
  setCurrentDialogId,
}

export default connect(mapStateToProps, actionCreators)(DialogsListContainer);