import React from 'react';
import { Route } from 'react-router-dom';
import styles from './dialogs.module.css'
import DialogsList from './DialogsList/DialogsList';
import Messages from './Messages/Messages';
import { getNameActionCreator } from '../../../redux/store';

const Dialogs = (props) => {
  const userId = '084926135';
  const userName = props.dispatch(getNameActionCreator(userId));

  return (
    <div className={styles.dialogs}>
      <DialogsList
        dispatch={props.dispatch}
      />
      <Route path="/dialogs/messages" render={() => (
        <Messages
          dispatch={props.dispatch}
          userName={userName}
          userId={userId}
        />
      )}/>
    </div>
  );
}
export default Dialogs;
