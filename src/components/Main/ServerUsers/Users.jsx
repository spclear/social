import React from 'react';
import UserItem from './UserItem/UserItem';
import styles from './users.module.css';
import Axios from 'axios';
import UserDefault from '../../../assets/images/UserDefault.png';
import Pages from './Pages/Pages'

class Users extends React.Component {

  componentDidMount() {
    this.props.toFirstPage();
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersShownNumber}&page=1`)
      .then(response => {
        this.props.setTotal(response.data.totalCount);
        this.props.setUsers(response.data.items);
      })
  }

  getUsers(props) {
    return props.users.map(item => {
      return (
        <UserItem
          key={item.id}
          fullName={item.name}
          id={item.id}
          avatar={item.photos.large || UserDefault}
          followed={item.followed}
          status={item.status || 'No current status'}
          toggleFollow={() => props.toggleFollow(item.id)}
        />
      )
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.switchPage(pageNumber);
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersShownNumber}&page=${pageNumber}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <div className={styles.users}>
        <h2 className={styles.title}>users</h2>
        <div className={styles.usersList}>
          {this.getUsers(this.props)}
        </div>
        <Pages
          currentPage={this.props.currentPage}
          switchPage={(number) => this.onPageChanged(number)}
        />
      </div>
    )
  }
}

export default Users;