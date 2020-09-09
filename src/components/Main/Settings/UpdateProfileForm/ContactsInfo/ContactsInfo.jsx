import React from 'react';
import { Field } from 'redux-form';
import styles from './contactsinfo.module.css';
import { UpdateProfileInput } from '../../../../../forms/UpdateProfileFields/UpdateProfileFields';

const ContactsInfo = ({contacts}) => {
  return (
    <div className={styles.contacts}>
      <div className={styles.title}>Contacts:</div>
      {
        Object.keys(contacts).map(key => {
          return (
            <Field
              key={key}
              component={UpdateProfileInput}
              name={'contacts.' + key}
              inputName={key}
              type="text"
              validate={[]}
            />
          )
        })
      }
    </div>
  )
}

export default ContactsInfo;