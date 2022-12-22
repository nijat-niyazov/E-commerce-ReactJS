import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  closeModal,
  decreaseQuantity,
  increaseQuantity,
} from '../../redux/slices/basketSlice';
import styles from './OrderDetails.module.css';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { toast } from 'react-toastify';

function OrderDetails({ colors, price, sizes, stock, description, img, id }) {
  const { quantity } = useSelector(state => state.basket);
  const [coloritta, setColoritta] = useState(false);
  const [sizeOpt, setSizeOpt] = useState(false);
  const dispatch = useDispatch();

  // const counts = {};
  // const sampleArray = ['a', 'a', 'b', 'c', 'a'];

  // console.log('a' == 'a');

  // const abc = {
  //   a: 'cart',
  // };

  // const abc2 = {
  //   a: 'cart',
  // };

  // console.log(abc == abc2);

  // sampleArray.forEach(x => (counts[x] = (counts[x] || 0) + 1));
  // console.log(counts);

  // ✅ Using bracket notation
  // obj['num'] = obj['num'] + 1 || 1;
  // console.log(obj.num); // 👉️ 3

  const addToBasket = () => {
    // const addedProduct = basket.some(product => product.id === id);

    // console.log(addedProduct);

    // if (addedProduct) {
    //   const tapdigim = basket.find(addenProduct => addenProduct.id === id);
    //   console.log(tapdigim);

    //   Object.defineProperties(tapdigim, {
    //     quantity: {
    //       value: quantity,
    //       writable: true,
    //     },
    //   });

    //   tapdigim.quantity = tapdigim.quantity + quantity;

    //   console.log(tapdigim.quantity); // 👉️ "Austria"

    //   // console.log((tapdigim. = tapdigim.quantity + 1 || 1));
    // }
    // // console.log(id);
    // // console.log(basket);
    // // console.log(addedProduct);
    // if (!addedProduct)
    dispatch(
      addProduct({
        name: description,
        size: sizeOpt,
        color: coloritta,
        price: price,
        quantity: quantity,
        image: img,
        id: id,
        stock: stock,
      })
    );
    dispatch(closeModal());
    toast.success(
      `You added ${quantity !== 1 ? quantity : 'a'} new item${
        quantity > 1 ? 's' : ''
      } to basket!`
    );
  };

  const changeQuantity = e => {
    e.target.value === '+'
      ? quantity === stock
        ? toast.info('You reached stock')
        : dispatch(increaseQuantity())
      : quantity < 2
      ? toast.info('At least one item')
      : dispatch(decreaseQuantity());
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_inner}>
        <div className={styles.header}>
          <span
            className={styles.close_modal}
            onClick={() => dispatch(closeModal())}
            style={{ textAlign: 'center' }}
          >
            <h3>Features</h3>
            <HighlightOffIcon />
          </span>
        </div>

        <div className={styles.sizes}>
          <h5 className={styles.option_name}>Size</h5>
          {sizes.map((sizze, i) => {
            return (
              <div key={i}>
                <input
                  className={styles.option_button}
                  type="radio"
                  name="size"
                  value={sizze}
                  onChange={e => setSizeOpt(e.target.value)}
                />
                <label className={styles.option}>{sizze}</label>
              </div>
            );
          })}
        </div>

        <div className={styles.colors}>
          <h5 className={styles.option_name}>Color</h5>
          {colors.map((col, i) => {
            return (
              <div key={i}>
                <input
                  className={styles.option_button}
                  type="radio"
                  name="product_color"
                  value={col}
                  onChange={e => setColoritta(e.target.value)}
                />
                <label className={styles.option} htmlFor="">
                  {col}
                </label>
              </div>
            );
          })}
        </div>

        <div className={styles.quantity}>
          <button
            className={styles.quantity_icon}
            value="-"
            onClick={e => changeQuantity(e)}
            disabled={!coloritta || !sizeOpt || quantity === 1}
          >
            {/* <RemoveIcon /> */}-
          </button>
          <span disabled={!coloritta || !sizeOpt}>{quantity}</span>
          <button
            className={styles.quantity_icon}
            value="+"
            onClick={e => changeQuantity(e)}
            disabled={!coloritta || !sizeOpt || quantity === stock}
          >
            {/* <AddIcon /> */}+
          </button>
        </div>

        <div className={styles.order_info}>
          <h5 className="block-title">
            Total price: {price * quantity}
            <span>
              <img
                src="https://www.meshque.com/img/aznPink.svg"
                alt="AZN"
                style={{ width: '20px' }}
              />
            </span>
          </h5>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.action_btn}
            style={{ background: '#12d86d' }}
          >
            Order without Login
          </button>
          <button
            onClick={addToBasket}
            className={styles.action_btn}
            style={{ background: '#d8127d' }}
          >
            Add ✔
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
