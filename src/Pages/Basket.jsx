import React from 'react';
import styles from '../styles/Basket.module.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../redux/slices/basketSlice';

function Basket() {
  const { basket } = useSelector(state => state.basketReducer);
  const dispatch = useDispatch();

  const ids = basket.map(bas => bas);

  // console.log(ids);
  // console.log(new Set(ids[0]));

  // var myArray = [1, 1, 4, 2, 3, 4, 2, 7, 5, 6];
  // var unique = myArray.filter((num, index, a) => {
  //   console.log(num);
  //   console.log(index);
  //   console.log(a);
  //   return a.indexOf(num) === index;
  // });

  // console.log(unique);

  let sumOfQuantities = 0;
  let totalPrice = 0;

  if (basket.length > 0) {
    sumOfQuantities = basket.map(item => item.quantity).reduce((a, b) => a + b);

    totalPrice = basket
      .map(item => item.price * item.quantity)
      .reduce((a, b) => +(a + b));
  }

  // console.log(sumOfQuantities, totalPrice);

  return (
    <div className={styles.basket_page}>
      <h1>Cart</h1>

      {basket.length < 1 ? (
        <h2 className={styles.empty_cart}>You have no products in your cart</h2>
      ) : (
        <div>
          <section className={styles.basket}>
            {basket.map((item, i) => {
              const { color, image, name, price, quantity, size, id } = item;
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
                    <button
                      onClick={() => {
                        console.log('deleted');
                        dispatch(deleteProduct(id));
                      }}
                      className={styles.deleteBtn}
                    >
                      <HighlightOffIcon />
                    </button>
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
            <button
              className={styles.action_btn}
              style={{ background: '#12d86d' }}
            >
              Order without Login
            </button>
            <button
              className={styles.action_btn}
              style={{ background: '#d8127d' }}
            >
              Add ✔
            </button>
          </section>
        </div>
      )}
    </div>
  );
}

export default Basket;
