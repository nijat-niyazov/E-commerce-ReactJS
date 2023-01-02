import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemImgs from './ItemImgs';

function Item() {
  const { products } = useSelector(state => state.products);
  const params = useParams();

  const selectedProduct = products.find(p => p.id === +params.id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  });

  return <ItemImgs {...selectedProduct} />;
}

export default Item;
