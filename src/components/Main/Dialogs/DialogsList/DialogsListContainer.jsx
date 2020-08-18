import { connect } from 'react-redux';
import DialogsList from './DialogsList';
import { setCurrentDialogId } from '../../../../redux/actionCreators'


let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.usersDialogs,
    getName: id => state.usersPage.getName(id),
    getAvatar: id => state.usersPage.getAvatar(id),
  }
}

const actionCreators = {
  setCurrentDialogId,
}

const DialogsListContainer = connect(mapStateToProps, actionCreators)(DialogsList);


export default DialogsListContainer;