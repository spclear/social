import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import styles from './dialogs.module.css'
import DialogsListContainer from './DialogsList/DialogsListContainer';
import MessagesContainer from './Messages/MessagesContainer';
import Preloader from '../../common/Preloader/Preloader';

const ChooseDialog = () => {
  return (
    <div className={styles.noDialog}>
        <h4 className={styles.noDialogTitle}>
          Choose a dialog to start...
        </h4>
        <Preloader extraClass={styles.preloader} />
    </div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <DialogsListContainer />
      <Route
        path="/dialogs/"
        render={() => <MessagesContainer />}
      />
      {props.currentDialogId ? null : <ChooseDialog />}
    </div>
  )
}
export default Dialogs;
