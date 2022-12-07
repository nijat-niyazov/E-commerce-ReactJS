import React, { useEffect } from 'react';
import ProductItem from './ProductItem';
import styles from '../styles/Products.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/slices/productsSlice';

function Products() {
  const { products } = useSelector(state => state.productsReducer);

  const dispatch = useDispatch();

  const calling = () => {
    const fetchingProducts = async () => {
      const res = await fetch('http://localhost:8000/products');
      const data = await res.json();
      dispatch(setProducts(data));
    };
    fetchingProducts();
  };

  useEffect(() => calling(), []);

  return (
    <div className={styles.products_cont}>
      {products.map(product => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Products;
