import React from 'react';
import styles from './settings.module.css';
import Preloader from '../../common/Preloader/Preloader';
import { useState } from 'react';


const UploadPhoto = (props) => {
  return (
    <div className={styles.uploadPhoto}>
      {props.photo &&
        <div className={styles.preview}>
          <img
            src={URL.createObjectURL(props.photo)}
            className={styles.photoPreview}
            alt="upload"
          />
        </div>
      }
      <div className={styles.options}>
        <label className={styles.label}>
          Choose
           <input
            type="file"
            onChange={props.onChange}
            className={styles.choosePhoto}
          />
        </label>
        <div
          className={styles.upload}
          onClick={props.onClick}
        >
          Upload
        </div>
      </div>
    </div>
  )
}

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

  return (
    <div className={styles.settings}>
      <h2 className={styles.title}>settings</h2>
      <div className={`${styles.photoUpdate} ${styles.settingsSection}`}>
        <h3 className={styles.sectionTitle}>
          Upload Photo:
        </h3>
        {props.isUploading
          ? <Preloader extraClass={styles.preloader}/>
          : <UploadPhoto
            onChange={setPreviewPhoto}
            onClick={uploadPhoto}
            photo={photo}
          />
        }
      </div>
    </div>
  )
}

export default Settings;