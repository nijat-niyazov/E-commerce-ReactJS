import React from 'react';
import styles from './Basket.module.css';
import BasketItem from './BasketItem';
import BasketInfo from './BasketInfo';
import { useSelector } from 'react-redux';
import Info from '../ZedComps/Typography';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import DividerText from '../ZedComps/Divider';

function Basket() {
  const { basket } = useSelector(state => state.basket);
  const [animationParent] = useAutoAnimate();

  return (
    <div className={styles.basket_page}>
      <DividerText content={'Basket'} />
      {basket.length < 1 ? (
        <Info content={'You have no any product in basket'} />
      ) : (
        <div ref={animationParent}>
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
