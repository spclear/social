import React from 'react';
import styles from './loginpage.module.css';
import { reduxForm } from 'redux-form';
import LoginForm from './LoginForm/LoginForm'

const LoginReduxForm = reduxForm({ form: 'loginForm' })(LoginForm);

const LoginPage = (props) => {
  const onSubmit = (formData) => {
    props.loginUser(formData);
  }
  return (
    <div className={styles.loginPage}>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}


export default LoginPage;