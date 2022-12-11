import React, { useEffect } from 'react';
import ProductItem from './ProductItem';
import styles from './Products.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/slices/productsSlice';
import { Link } from 'react-router-dom';

function Products() {
  const { products } = useSelector(state => state.persistedProducts);
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
      {products.map((product, i) => {
        // console.log(product.id);
        return (
          <Link to={`item/${product.id}`} key={i}>
            <ProductItem {...product} />;
          </Link>
        );
      })}
    </div>
  );
}

export default Products;
