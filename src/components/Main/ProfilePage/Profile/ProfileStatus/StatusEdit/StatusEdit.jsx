import React, {useRef, useEffect} from 'react';
import styles from './statusedit.module.css';
import Button from '../../../../../common/Button/Button';

const StatusEdit = (props) => {
  const statusDiv = useRef(null);

  const changeInputValue = (e) => {
    props.onChange(e.currentTarget.value);
  }
  
  const handleClickAway = (e) => {
    if (!statusDiv.current.contains(e.target)) {
      props.onClickAway();
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickAway);
    return () => {
      window.removeEventListener('click', handleClickAway)
    }
  }, [])

  return (
    <div
      className={styles.statusEdit}
      ref={statusDiv}
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
      <Button
        onClick={props.onClick}
        buttonName="Save"
        addClass={styles.button}
      />
    </div>
  )
}

export default StatusEdit;