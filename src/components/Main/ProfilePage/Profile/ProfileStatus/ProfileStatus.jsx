import React from 'react';
import styles from './profilestatus.module.css';
import StatusEdit from './StatusEdit/StatusEdit';

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      currentStatus: this.props.status
    }
  }
  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode,
    })
  }
  updateCurrentStatus = (value) => {
    this.setState({
      currentStatus: value,
    })
  }

  render() {
    if (!this.state.editMode) return (
      <div className={styles.status} onClick={this.toggleEditMode}>
        <p className={styles.statusText}>
          {this.state.currentStatus}
        </p>
      </div>
    )
    return (
      <StatusEdit
        status={this.state.currentStatus}
        onBlur={this.toggleEditMode}
        onChange={(value) => this.updateCurrentStatus(value)}
      />
    )
  }
}

export default ProfileStatus;