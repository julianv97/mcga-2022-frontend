import React from 'react';
import Button from '../../components/Button';
import styles from './login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <div>Login</div>
      <Button text={'Ingresar'} onClick={() => console.log('Ingresar')} />
    </div>
  );
};

export default Login;
