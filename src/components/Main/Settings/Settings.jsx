import React from 'react';
import styles from './settings.module.css';
import { useState } from 'react';
import UpdateProfileForm from './UpdateProfileForm/UpdateProfileForm';
import UploadPhoto from './UploadPhoto/UploadPhoto';

const Settings = (props) => {
  const [photo, setPhoto] = useState(null); 

  const uploadPhoto = () => {
    if (photo) {
      props.uploadPhoto(photo);
    }
  }

  const setPreviewPhoto = (e) => {
    setPhoto(e.target.files[0])
  }

  const submitProfile = (formData) => {
    props.updateProfile(formData);
  }

  return (
    <div className={styles.settings}>
      <h2 className={styles.title}>settings</h2>
      <UploadPhoto
        onChange={setPreviewPhoto}
        onClick={uploadPhoto}
        photo={photo}
        currentUserPhoto={props.userInfo.photos.large}
        isUploading={props.isPhotoUploading}
      />
      <UpdateProfileForm
        onSubmit={submitProfile}
        initialValues={props.userInfo}
        userInfo={props.userInfo}
        isUpdating={props.isProfileUpdating}
      />
    </div>
  )
}

export default Settings;