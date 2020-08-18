import React from 'react';
import profileInfo from './profileinfo.module.css'

const InfoItem = (props) => {
  return (
    <li className={profileInfo.item}>
      {props.info}
      <span className={profileInfo.data}>{props.data}</span>
    </li>
  )
}

const checkIfGiven = data => data || 'no information given';

const ProfileInfo = (props) => {
  return (
    <ul className={profileInfo.infoList}>
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