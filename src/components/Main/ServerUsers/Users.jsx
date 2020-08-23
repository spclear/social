import React from 'react';
import UserItem from './UserItem/UserItem';
import styles from './users.module.css';
import UserDefault from '../../../assets/images/UserDefault.png';
import Pages from './Pages/Pages'
import Preloader from '../../common/Preloader/Preloader';

const Users = (props) => {
  const users = props.users.map(item => {
    return (
      <UserItem
        key={item.id}
        inFollowingProgress={props.inFollowingProgress}
        fullName={item.name}
        id={item.id}
        avatar={item.photos.large || UserDefault}
        followed={item.followed}
        status={item.status || 'No current status'}
        toggleFollow={() => props.toggleFollow(item.followed, item.id)}
      />
    )
  })

  return (
    <div className={styles.users}>
      <h2 className={styles.title}>users</h2>
      <Pages
        currentPage={props.currentPage}
        switchPage={(number) => props.onPageChanged(number)}
      />
      <div className={styles.usersList}>
        {
          props.isLoading
          ? <Preloader extraClass={styles.preloader} />
          : users
        }
      </div>
      <Pages
        currentPage={props.currentPage}
        switchPage={(number) => props.onPageChanged(number)}
      />
    </div>
  )
}

export default Users;