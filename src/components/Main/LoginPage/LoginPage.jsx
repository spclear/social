import React from 'react';
import styles from './loginpage.module.css';
import Button from '../../common/Button/Button';

const InputItem = (props) => {
  return (
    <div className={styles.inputItem}>
      <label htmlFor={props.id} className={`${styles.label}`}>
        {props.label}
      </label>
      <input id={props.id} className={styles.input} type={props.type} placeholder={props.placeHolder}/>
    </div>
  )
}

const popUp = React.createRef();
const remove = (ref) => {
  ref.current.classList.toggle(styles.show);
}

const LoginForm = (props) => {

  return (
    <div
      ref={popUp}
      className={styles.login}
    >
      <div
        className={styles.loginOverlay}
        onClick={() => remove(popUp)}
      />
      <div className={styles.loginForm}>
        <h2 className={styles.title}>
          Login
        </h2>
        <InputItem
          placeHolder='Enter your email or login'
          type='email'
          id='email'
          label='Email'
        />
        <InputItem
          placeHolder='Enter your password'
          type='password'
          id='password'
          label='Password'
        />
        <Button
          buttonName='Submit'
          addClass={styles.button}
        />
      </div>
    </div>
  )
}

const LoginPage = (props) => {
  return (
    <div>
      <Button
        buttonName='login now'
        addClass={styles.loginButton}
        onClick={() => remove(popUp)}
      />
      <LoginForm />
    </div>
  )
}


export default LoginPage;