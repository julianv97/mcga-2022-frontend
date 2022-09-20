import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import styles from './products.module.css';

const Products = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div>Productos</div>
      <Button text={'Cerrar sesión'} onClick={() => navigate("/login")} />
      <a href="/login">Esto recarga la página</a>
    </div>
  );
};

export default Products;



/* The href attribute would trigger a page refresh which would reset the application states. However the link and navlink of react-router doesn't trigger a page refresh. Since React is used to create single page applications most of the time make sure you choose Link or Navlink when working with routing */