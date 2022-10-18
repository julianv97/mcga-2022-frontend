import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveData } from '../../store/products/actions';

// create mock of products
const productsMock = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 300,
  },
]

const Products = () => {
     const productsSelector = useSelector((state) => state.products);

     console.log('productsSelector', productsSelector.data);

     const dispatch = useDispatch();

     const getData = async () => {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        console.log('data', data);
     }

     useEffect(() => {
        dispatch(saveData(productsMock));
        getData();
     }, [dispatch]);

  return (
    <div>{

        productsSelector.data.map((product) => {
            return (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.price} pesos</p>
                </div>
            )
        }
        )
        
        }</div>
  )
}

export default Products