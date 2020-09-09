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
