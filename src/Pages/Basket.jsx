import React from 'react';
import styles from '../styles/Basket.module.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useSelector } from 'react-redux';

function Basket() {
  const { basket } = useSelector(state => state.basketReducer);

  // console.log(basket);

  return (
    <div className={styles.basket_page}>
      <h1>Cart</h1>
      <section className={styles.basket}>
        {basket.map((item, i) => {
          const { color, image, name, price, quantity, size } = item;
          // console.log(color, image, name, price, quantity, size);
          return (
            <article className={styles.item} key={i}>
              <div className={styles.left}>
                <img className={styles.item_img} src={image} alt={image} />

                <div>
                  <h4>{name}</h4>
                  <p>Color: {color} </p>
                  <p>Size: {size} </p>
                  <p>Quantity: {quantity} </p>
                </div>
              </div>

              <div className={styles.right}>
                <HighlightOffIcon />
                <div className={styles.price_cont}>
                  <span className={styles.price}>{price * quantity}</span>
                  <img
                    src="https://www.meshque.com/img/aznPink.svg"
                    style={{ width: '12px', height: '10px' }}
                    alt="azn"
                  />
                </div>
              </div>
            </article>
          );
        })}
      </section>

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
              <li>3 </li>
              <li>add Delivery addres </li>
            </ul>
            <span>
              {670}
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

export default Basket;
