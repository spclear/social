import React from 'react';
import styles from './statusedit.module.css';

const StatusEdit = (props) => {
  const changeInputValue = (e) => {
    props.onChange(e.currentTarget.value);
  }

  return (
    <div
      className={styles.statusEdit}
      onBlur={props.onBlur}
    >
      <input
        maxLength="50"
        className={styles.statusInput}
        placeholder="What's new?"
        type='text'
        value={props.status}
        autoFocus={true}
        onChange={changeInputValue}
      />
    </div>
  )
}

export default StatusEdit;