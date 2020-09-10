import React from 'react';
import styles from './uploadphoto.module.css';
import ButtonLoading from '../../../common/ButtonLoading/ButtonLoading';

const UploadPhoto = (props) => {
  return (
    <div className={styles.uploadPhoto}>
      <div className={styles.title}>
        Upload Photo:
      </div>
      <div className={styles.upload}>
        <div className={styles.preview}>
          <img
            src={props.photo ? URL.createObjectURL(props.photo) : props.currentUserPhoto}
            className={styles.photoPreview}
            alt="upload"
          />
          <label className={styles.label}>
            <div className={styles.choosePhoto}>Choose a photo</div>
            <input
              type="file"
              onChange={props.onChange}
            />
          </label>
        </div>
        <button
          className={styles.uploadButton}
          onClick={props.onClick}
          disabled={props.isUploading}
        >
          {(props.isUploading)
            ? <ButtonLoading backgroundColor='#353b48' />
            : 'Upload'
          }
        </button>
      </div>
    </div>
  )
}

export default UploadPhoto;