import React from 'react';
import styles from './music.module.css';
import ButtonLoading from '../../common/ButtonLoading/ButtonLoading';

const Music = () => {
  return (
    <div className={styles.music}>
      Music
      <button>
        <ButtonLoading backgroundColor='red' />
      </button> 
    </div>
  )
}

export default Music;