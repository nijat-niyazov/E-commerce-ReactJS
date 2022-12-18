import React, { useEffect } from 'react';
import ProductItem from './ProductItem';
import styles from './Products.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/slices/productsSlice';
import useFetch from '../../utils/useFetch';

function Products() {
  // const { data2: productItems } = useFetch('products');
  // const dispatch = useDispatch();
  // dispatch(setProducts(productItems));

  const { products } = useSelector(state => state.products);
  const { query, filtered } = useSelector(state => state.filtered);
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
      {(query || filtered.length > 1 ? filtered : products).map(
        (product, i) => (
          <ProductItem key={i} {...product} />
        )
      )}
    </div>
  );
}

export default Products;
