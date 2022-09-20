import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import styles from './login.module.css';

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div>Login</div>
      <Button text={'Ingresar'} onClick={() => navigate("/products")} />
    </div>
  );
};

export default Login;
