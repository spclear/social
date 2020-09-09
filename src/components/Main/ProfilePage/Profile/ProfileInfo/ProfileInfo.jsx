import React from 'react';
import styles from './profileinfo.module.css';
import InfoItem from '../../../../common/InfoItem/InfoItem';
import Contacts from './Contacts';

const ProfileInfo = (props) => {
  return (
    <div className={styles.infoList}>
      <InfoItem
        info='About me:'
        data={props.info.aboutMe}
      />
      <InfoItem
        info='Professional skills:'
        data={props.info.lookingForAJobDescription}
      />
      <Contacts contacts={props.info.contacts}/>
    </div>
  )
}

export default ProfileInfo;