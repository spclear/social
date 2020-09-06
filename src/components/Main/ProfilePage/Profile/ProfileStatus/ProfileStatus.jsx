import React, {useState, useEffect} from 'react';
import styles from './profilestatus.module.css';
import StatusEdit from './StatusEdit/StatusEdit';

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [currentStatus, setCurrentStatus] = useState(props.status);

  useEffect(() => {
    setCurrentStatus(props.status);
  }, [props.status])

  const toggleEditMode = () => {
    if (props.authorizedUser === props.shownUser) {
      if (editMode) {
        props.updateStatus(currentStatus);
      }
      setEditMode(prev => !prev);
    }
  }

  if (!editMode) {
    return (
      <div className={styles.status} onClick={toggleEditMode}>
        <p className={styles.statusText}>
          {props.status || 'This user has no status yet...'}
        </p>
      </div>
    )
  }
  return (
    <StatusEdit
      status={currentStatus}
      onBlur={toggleEditMode}
      onChange={(value) => setCurrentStatus(value)}
    />
  )
}

export default ProfileStatus;