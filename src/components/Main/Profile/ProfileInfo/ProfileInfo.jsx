import React from 'react';
import profileInfo from './profileinfo.module.css'

const InfoItem = () => {
  return (
    <li className={profileInfo.item}>
      Date of Birth:
      <span className={profileInfo.data}>April 11th</span>
    </li>
  )
}

const ProfileInfo = () => {
  return (
    <ul className={profileInfo.infoList}>
      <InfoItem />
      <InfoItem />
      <InfoItem />
      <InfoItem />
    </ul>
  );
}

export default ProfileInfo;