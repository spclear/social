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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        currentStatus: this.props.status,
      })
    }
  }

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode,
    })
    if (this.state.editMode) {
      this.props.updateStatus(this.state.currentStatus);
    }
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
          {this.props.status || 'This user has no status yet...'}
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