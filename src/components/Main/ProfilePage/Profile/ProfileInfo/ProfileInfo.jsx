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

const ProfileInfo = () => {
  return (
    <ul className={profileInfo.infoList}>
      <InfoItem info='Date of birth: ' data='April 11th' />
      <InfoItem info='City: ' data='Kherson' />
      <InfoItem info='Education: ' data='no information given' />
      <InfoItem info='Web Site: ' data='no information given' />
    </ul>
  )
}

export default ProfileInfo;