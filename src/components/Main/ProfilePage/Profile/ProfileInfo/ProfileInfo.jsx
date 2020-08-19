import React from 'react';
import styles from './profileinfo.module.css';
import InfoItem from '../../../../common/InfoItem/InfoItem';

const checkIfGiven = data => data || 'no information given';

const ProfileInfo = (props) => {
  return (
    <ul className={styles.infoList}>
      <InfoItem
        info='About me:'
        data={checkIfGiven(props.info.aboutMe)}
      />
      <InfoItem
        info='Location: '
        data={`${checkIfGiven(props.info.location.countryName)}, ${checkIfGiven(props.info.location.cityName)}`}
      />
      <InfoItem
        info='Date of birth: '
        data={checkIfGiven(props.info.birthDate)}
      />
      <InfoItem
        info='Website: '
        data={checkIfGiven(props.info.contacts.website)}
      />
    </ul>
  )
}

export default ProfileInfo;