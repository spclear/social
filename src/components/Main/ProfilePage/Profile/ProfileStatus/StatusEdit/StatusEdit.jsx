import React from 'react';
import styles from './statusedit.module.css';

const StatusEdit = (props) => {
  const input = React.createRef();
  const changeInputValue = () => {
    props.onChange(input.current.value);
  }

  return (
    <div
      className={styles.statusEdit}
      onBlur={props.onBlur}
    >
      <input
        maxlength="50"
        className={styles.statusInput}
        placeholder="What's new?"
        ref={input}
        type='text'
        value={props.status}
        autoFocus='true'
        onChange={changeInputValue}
      />
    </div>
  )
}

export default StatusEdit;