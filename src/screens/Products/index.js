import React from 'react';
import Link from '../../components/Link';
import styles from './products.module.css';

const Products = () => {
  return (
    <div className={styles.container}>
      <div>Productos</div>
      <Link text={'Cerrar sesión'} to={'/login'} />
      <a href="/login">Esto recarga la página</a>
    </div>
  );
};

export default Products;



/* The href attribute would trigger a page refresh which would reset the application states. However the link and navlink of react-router doesn't trigger a page refresh. Since React is used to create single page applications most of the time make sure you choose Link or Navlink when working with routing */