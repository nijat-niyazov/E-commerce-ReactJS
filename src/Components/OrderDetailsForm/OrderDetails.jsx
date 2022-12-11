import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, closeModal } from '../../redux/slices/basketSlice';
import styles from './OrderDetails.module.css';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { toast } from 'react-toastify';

function OrderDetails({ colors, price, sizes, stock, description, img, id }) {
  const [quantity, setQuantity] = useState(1);
  const [coloritta, setColoritta] = useState(false);
  const [sizeOpt, setSizeOpt] = useState(false);
  const dispatch = useDispatch();

  console.log(sizeOpt);

  const addToBasket = () => {
    dispatch(
      addProduct({
        name: description,
        size: sizeOpt,
        color: coloritta,
        price: price,
        quantity: quantity,
        image: img,
        id: id,
      })
    );
    dispatch(closeModal());
    toast.success('You added items to basket !');
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
            // onClick={() => {
            //   if (quantity < 2) return;
            //   else {
            //     dispatch(decreaseQuantity());
            //   }
            onClick={() => {
              if (quantity < 2) return;
              else {
                setQuantity(quantity => quantity - 1);
              }
            }}
            disabled={!coloritta || !sizeOpt}
          >
            <RemoveIcon />
          </button>
          <span disabled={!coloritta || !sizeOpt}>{quantity}</span>
          <button
            className={styles.quantity_icon}
            disabled={!coloritta || !sizeOpt}
            // onClick={() => {
            //   if (quantity === stock) return;
            //   else {
            //     dispatch(increaseQuantity());
            //   }
            onClick={() => {
              if (quantity === stock) return;
              else {
                setQuantity(quantity => quantity + 1);
              }
            }}
          >
            <AddIcon />
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
          {/* <div>
            <button onClick={showToastMessage}>Notify</button>
            <ToastContainer />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
