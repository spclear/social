import React from 'react';
import styles from './controlledforms.module.css';

export const ControlledInput = ({ input, meta, ...props }) => {
  
  const hasError = (meta.error && meta.touched);
  const errorMessage = hasError ? `${meta.error}` : '';
  
  return (
    <div className={styles.inputItem}>
      <label
        className={styles.inputLabel + (hasError ? ' ' + styles.errorLabel : '')}
        htmlFor={props.id}
      >
        {props.label}

      </label>
      <input
        {...input}
        className={styles.input + (hasError ? ' ' + styles.errorInput : '')}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        type={props.type}
      />
      <div className={styles.errorMessage}>
        {errorMessage}
      </div>
    </div>
  )
}

export const Captcha = ({ input, meta, ...props }) => {

  const hasError = (meta.error && meta.touched);
  const errorMessage = hasError ? `${meta.error}` : '';

  return (
    <div className={styles.captcha}>
      <div className={styles.captchaTitle}>Enter symbols from the image:</div>
      <img className={styles.captchaImage} src={props.image} alt="captcha"/>
      <input
        {...input}
        className={styles.captchaInput + (hasError ? ' ' + styles.errorInput : '')}
        name={props.name}
        type='text'
      />
      <div className={styles.captchaErrorMessage}>
        {errorMessage}
      </div>
    </div>
  )
}