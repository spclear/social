import React from 'react';
import styles from './loginform.module.css';
import { Field } from 'redux-form';
import Button from '../../../common/Button/Button';
import Separator from '../../../common/Separator/Separator';

const LoginForm = (props) => {
  return (
    <form className={styles.loginForm} onSubmit={props.handleSubmit}>
      <h2 className={styles.title}>Login</h2>
      <Separator />
      <div className={styles.inputItem}>
        <label
          className={styles.inputLabel} htmlFor="login">Email</label>
        <Field
          placeholder="Enter your email"
          className={styles.input}
          name="email"
          id="login"
          component="input"
          type="email"
        />
      </div>
      <div className={styles.inputItem}>
        <label className={styles.inputLabel} htmlFor="password">Password</label>
        <Field
          className={styles.input}
          placeholder="Enter your password"
          name="password"
          id="password"
          component="input"
          type="password"
        />
      </div>
      <div className={styles.rememberMe}>
        <Field
          className={styles.input}
          name="rememberMe"
          id="rememberMe"
          component="input"
          type="checkBox"
        />
        <label className={styles.inputLabel} htmlFor="rememberMe">Remember Me</label>
      </div>
      <Button
        type="submit"
        addClass={styles.submitButton}
        buttonName="Submit"
      />
    </form>
  )
}

export default LoginForm;
