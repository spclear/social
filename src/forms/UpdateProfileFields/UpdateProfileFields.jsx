import React from 'react';
import styles from './updateprofilefields.module.css';

export const UpdateProfileInput = ({ input, meta, ...props }) => {

  const hasError = (meta.error && meta.touched);
  const errorMessage = hasError ? `${meta.error}` : '';

  return (
    <div className={styles.inputItem}>
      <div className={styles.inputTitle}>{props.inputName}</div>
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

export const UpdateProfileTextarea = ({ input, meta, ...props }) => {
  return (
    <div className={styles.textareaItem}>
      <div className={styles.textareaTitle}>{props.areaName}</div>
      <textarea
        maxLength={props.maxLength}
        {...input}
        className={styles.textarea}
        placeholder={props.placeholder}
        name={props.name}
      />
    </div>
  )
}
export const UpdateProfileCheckbox = ({ input, meta, ...props }) => {
  return (
    <div className={styles.checkboxItem}>
      <label
        className={styles.checkboxLabel}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        {...input}
        className={styles.checkbox}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        type="checkbox"
        checked={props.checked}
      />
    </div>
  )
}
