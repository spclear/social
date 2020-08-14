import React from 'react';
import UserItem from './UserItem/UserItem';
import styles from './users.module.css';

class Users extends React.Component {
  getUsers(props) {
    return props.users.map(item => {
      return (
        <UserItem
          key={item.id}
          fullName={`${item.firstName} ${item.lastName}`}
          id={item.id}
          avatar={props.getAvatar(item.id)}
          city={item.location.cityName}
          country={item.location.countryName}
          followed={item.followed}
          status={item.status}
          toggleFollow={() => props.toggleFollow(item.id)}
        />
      )
    })
  }

  render() {
    return (
      <div className={styles.users}>
        <h2 className={styles.title}>users</h2>
        <div className={styles.usersList}>
          {this.getUsers(this.props)}
        </div>
      </div>
    )
  }
}

export default Users;