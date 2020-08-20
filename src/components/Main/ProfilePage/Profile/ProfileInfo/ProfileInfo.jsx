import React from 'react';
import styles from './profileinfo.module.css';
import InfoItem from '../../../../common/InfoItem/InfoItem';

const checkIfGiven = data => data || 'no information given';

const ProfileInfo = (props) => {
  const location = props.info.location
    ? `${props.info.location.cityName}, ${props.info.location.countryName}`
    : 'no information given';
  
  return (
    <ul className={styles.infoList}>
      <InfoItem
        info='About me:'
        data={checkIfGiven(props.info.aboutMe)}
      />
      <InfoItem
        info='Location: '
        data={location}
      />
      <InfoItem
        info='Website: '
        data={checkIfGiven(props.info.contacts.website)}
      />
      <InfoItem
        info='VK: '
        data={checkIfGiven(props.info.contacts.vk)}
      />
      <InfoItem
        info='Twitter: '
        data={checkIfGiven(props.info.contacts.twitter)}
      />
    </ul>
  )
}

export default ProfileInfo;