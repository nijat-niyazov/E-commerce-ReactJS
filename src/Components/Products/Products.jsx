import React from 'react';
import ProductItem from './ProductItem';
import styles from './Products.module.css';
import { useSelector } from 'react-redux';
import useFetch from '../../utils/useFetch';
import Info from '../ZedComps/Typography';

function Products() {
  const { data } = useFetch('../data/data.json');
  const { products } = data;
  const { query, filtered } = useSelector(state => state.filtered);

  return (
    <div>
      {query && filtered.length < 1 && (
        <Info content={'Nothing matches to your search query'} />
      )}
      <div className={styles.products_cont}>
        {(query || filtered.length > 1 ? filtered : products)?.map(product => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
