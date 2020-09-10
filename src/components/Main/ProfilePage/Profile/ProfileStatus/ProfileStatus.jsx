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
    if (props.isOwner) {
      if (editMode) {
        props.updateStatus(currentStatus);
      }
      setEditMode(prev => !prev);
    }
  }
  const undoStatusChanges = () => {
    setCurrentStatus(props.status);
    setEditMode(false);
  }

  return (
    <div className={styles.statusBox} >
      {editMode
        ?
        <StatusEdit
          status={currentStatus}
          onClickAway={undoStatusChanges}
          onClick={toggleEditMode}
          onChange={(value) => setCurrentStatus(value)}
        />
        :
        <div className={styles.status} onClick={toggleEditMode}>
          <p className={`${styles.statusText} ${props.isOwner && styles.editable}`}>
            {props.status || 'This user has no status yet...'}
          </p>
        </div>
      }
    </div>
  )
}

export default ProfileStatus;