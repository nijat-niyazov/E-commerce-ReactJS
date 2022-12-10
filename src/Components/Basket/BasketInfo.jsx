import React from 'react';
import styles from './Basket.module.css';
import { useSelector } from 'react-redux';

function BasketInfo() {
  const { basket } = useSelector(state => state.persistedBasket);

  let sumOfQuantities = 0;
  let totalPrice = 0;

  if (basket.length > 0) {
    sumOfQuantities = basket.map(item => item.quantity).reduce((a, b) => a + b);

    totalPrice = basket
      .map(item => item.price * item.quantity)
      .reduce((a, b) => +(a + b));
  }

  return (
    <div>
      <section className={styles.promocode}>
        <h4>Promo code</h4>

        <div className={styles.promo_cont}>
          <input type="text" placeholder="Promo Code" />
          <button className={styles.apply}>Apply</button>
        </div>
      </section>
      <section className={styles.order_info}>
        <h3>About the order</h3>

        <div className={styles.info_cont}>
          <div className={styles.info_cont_left}>
            <ul>
              <li>Amount of products </li>
              <li>Delivery price </li>
            </ul>
            <span>Total price </span>
          </div>
          <div className={styles.info_cont_right}>
            <ul>
              <li>{sumOfQuantities} </li>
              <li>add Delivery addres </li>
            </ul>
            <span>
              {totalPrice}
              <img
                src="https://www.meshque.com/img/aznPink.svg"
                style={{ width: '12px', height: '10px' }}
                alt="azn"
              />
            </span>
          </div>
        </div>
      </section>
      <section className={styles.actions}>
        <button className={styles.action_btn} style={{ background: '#12d86d' }}>
          Order without Login
        </button>
        <button className={styles.action_btn} style={{ background: '#d8127d' }}>
          Add ✔
        </button>
      </section>
    </div>
  );
}

export default BasketInfo;
