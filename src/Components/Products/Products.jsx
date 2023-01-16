import React from 'react';
import ProductItem from './ProductItem';
import styles from './Products.module.css';
import { useSelector } from 'react-redux';
import useFetch from '../../utils/useFetch';

function Products() {
  const { data } = useFetch('../data/data.json');
  const { products } = data;

  const { query, filtered } = useSelector(state => state.filtered);

  return (
    <div className={styles.products_cont}>
      {(query || filtered.length > 1 ? filtered : products)?.map(
        (product, i) => (
          <ProductItem key={product.id} {...product} index={i} />
        )
      )}
    </div>
  );
}

export default Products;
