import React from 'react';
import styles from './profileinfo.module.css';
import { useState } from 'react';

const ContactsList = ({ contacts, visible }) => {
  const keys = Object.keys(contacts);
  const isInfoGiven = keys.filter(key => contacts[key]).length > 0;

  const items = keys.map(key => {
    if (contacts[key]) {
      return (
        <li key={key} className={styles.contactItem}>
          {key}:
          <a
            href={contacts[key]}
            className={styles.contactData}
            target="_blank"
          >
            {contacts[key]}
          </a>
        </li>
      )
    }
  })

  return (
    <div className={`${styles.contactsBlock} ${visible && styles.blockShown}`}>
      {(isInfoGiven)
        ? items
        : <span className={styles.noInfo}>
            Information not specified
          </span>
      }
    </div>
  )
}

const Contacts = (props) => {
  let [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(prev => !prev)
  }

  return (
    <div className={styles.contacts}>
      <span
        onClick={toggleVisibility}
        className={styles.title}
        title="Show contacts" 
      >
        Contacts
        <i className={`${styles.arrow} ${visible && styles.arrowShown}`}/>
      </span>
      <ContactsList contacts={props.contacts} visible={visible}/>
    </div>
  )
}

export default Contacts;