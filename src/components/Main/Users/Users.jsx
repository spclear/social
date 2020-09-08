import React from 'react';
import styles from './users.module.css';
import UserItem from './UserItem/UserItem';
import Preloader from '../../common/Preloader/Preloader';
import Pages from '../../common/Pages/Pages';
import UserDefault from '../../../assets/images/UserDefault.png';

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
        status={item.status || 'This user has no status yet...'}
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
        usersTotal={props.usersTotal}
        shownUsersNumber={props.shownUsersNumber}
      />
      <div className={styles.usersList}>
        {
          props.isLoading
          ? <Preloader extraClass={styles.preloader} />
          : users
        }
      </div>
    </div>
  )
}

export default Users;