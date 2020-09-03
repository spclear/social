import React from 'react';
import styles from './loginform.module.css';
import { Field } from 'redux-form';
import Button from '../../../common/Button/Button';
import Separator from '../../../common/Separator/Separator';
import { ControlledInput } from '../../../../forms/controlledForms';
import { required, minLength, emailContains } from '../../../../forms/validation';

const minLength8 = minLength(8);
const requiredPass = required("password");
const requiredEmail = required("email");

const LoginForm = (props) => {
  return (
    <form className={styles.loginForm} onSubmit={props.handleSubmit}>
      <h2 className={styles.title}>Login</h2>
      <Separator />
      <div className={styles.formError}>
        {props.error ? props.error + '!' : ''}
      </div>
      <Field
        placeholder="Enter your email"
        component={ControlledInput}
        name="email"
        label="Email"
        id="email"
        type="text"
        validate={[requiredEmail, emailContains]}
      />
      <Field
        placeholder="Enter your password"
        component={ControlledInput}
        name="password"
        label="Password"
        id="password"
        type="password"
        validate={[requiredPass, minLength8]}
      />
      <div className={styles.rememberMe}>
        <Field
          className={styles.input}
          name="rememberMe"
          id="rememberMe"
          component="input"
          type="checkBox"
        />
        
        <label
          className={styles.inputLabel}
          htmlFor="rememberMe"
        >
          Remember Me
        </label>
      </div>

      <Button
        type="submit"
        addClass={styles.submitButton}
        buttonName="Submit"
        disabled={props.inSubmit}
      />
    </form>
  )
}

export default LoginForm;
