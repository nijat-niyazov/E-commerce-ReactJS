import React from 'react';
import styles from './Basket.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { clearBasket } from '../../redux/slices/basketSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function BasketInfo() {
  const { basket } = useSelector(state => state.basket);
  const { userIn } = useSelector(state => state.users);
  const dispatch = useDispatch();

  let sumOfQuantities = 0;
  let totalPrice = 0;

  if (basket.length > 0) {
    sumOfQuantities = basket
      .map(item => item.quantity)
      .reduce((a, b) => a + b);

    totalPrice = basket
      .map(item => item.price * item.quantity)
      .reduce((a, b) => +(a + b));
  }

  const clearItemsFromBasket = () => {
    dispatch(clearBasket());
    toast.error('Your basket is empty now!');
  };

  return (
    <div>
      <section style={{ maxWidth: '700px', margin: 'auto' }}>
        <Stack spacing={15} direction="row">
          <Button
            sx={{
              ml: 'auto',
              mt: '10px',
            }}
            variant="contained"
            color="error"
            size="large"
            disabled={sumOfQuantities < 2}
            onClick={clearItemsFromBasket}
          >
            Clear Basket
          </Button>
        </Stack>
      </section>
      ;
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
              <li>Add Delivery addres </li>
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
        <Link to="/login">
          <button
            className={styles.action_btn}
            style={{ background: '#12d86d' }}
          >
            Order {userIn ? 'now' : 'without Login'}
          </button>
        </Link>
        <button className={styles.action_btn} style={{ background: '#d8127d' }}>
          Add ✔
        </button>
      </section>
    </div>
  );
}

export default BasketInfo;
