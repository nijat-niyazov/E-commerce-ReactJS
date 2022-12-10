import React from 'react';
import styles from './Basket.module.css';
import BasketItem from './BasketItem';
import BasketInfo from './BasketInfo';
import { useSelector } from 'react-redux';

function Basket() {
  const { basket } = useSelector(state => state.persistedBasket);

  console.log(basket);

  return (
    <div className={styles.basket_page}>
      <h1>Cart</h1>

      {basket.length < 1 ? (
        <h2 className={styles.empty_cart}>You have no products in your cart</h2>
      ) : (
        <div>
          {basket.map((item, i) => (
            <BasketItem key={i} {...item} />
          ))}
          <BasketInfo />
        </div>
      )}
    </div>
  );
}

export default Basket;
