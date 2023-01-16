import React from 'react';
import { useState } from 'react';
import styles from './Item.module.css';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/slices/basketSlice';
import { toast } from 'react-toastify';

function ItemInfo({ colors, description, id, mainImg, price, sizes, stock }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [coloritta, setColoritta] = useState(null);
  const [sizeOpt, setSizeOpt] = useState(null);

  const [activeSize, setActiveSize] = useState(null);
  const [activeColor, setActiveColor] = useState(null);

  const colorDefiner = (e, i) => {
    setColoritta(e.target.value);
    setActiveColor(i);
  };

  const sizeDefiner = (e, i) => {
    setSizeOpt(e.target.value);
    setActiveSize(i);
  };

  const addToBasket = () => {
    dispatch(
      addProduct({
        color: coloritta,
        size: sizeOpt,
        quantity: quantity,
        price: price,
        image: mainImg,
        id: id,
        name: description,
      })
    );
    toast.success('Added new item to basket!');
    setColoritta(null);
    setSizeOpt(null);
    setQuantity(1);
    setActiveColor(null);
    setActiveSize(null);
  };

  return (
    <div>
      <h2 className={styles.description}>{description}</h2>
      <div
        className={styles.price_cont}
        style={{
          marginBottom: '10px',
        }}
      >
        <span className={styles.price}>Product price: {price}</span>
        <img
          src="https://www.meshque.com/img/aznPink.svg"
          className={styles.logo}
          alt="azn"
        />
      </div>
      <h4
        style={{
          fontSize: '35px',
          marginBottom: '20px',
        }}
      >
        Features
      </h4>
      <section className={styles.colors}>
        <p className={styles.option_name}>Colors:</p>
        {colors?.map((oneColor, i) => {
          return (
            <button
              key={i}
              className={styles.color}
              style={{
                '--color': oneColor,
                marginRight: activeColor === i ? '20px' : '',
                marginLeft: activeColor === i ? '10px' : '',
                transform: activeColor === i ? 'scale(1.5)' : '',
                transition: 'all 0.2s',
              }}
              value={oneColor}
              onClick={e => {
                colorDefiner(e, i);
              }}
            ></button>
          );
        })}
      </section>
      <section className={styles.sizes}>
        <p className={styles.option_name}>Sizes:</p>
        {sizes?.map((oneSize, i) => {
          return (
            <button
              key={i}
              className={styles.size}
              value={oneSize}
              style={{
                marginRight: activeSize === i ? '20px' : '',
                marginLeft: activeSize === i ? '10px' : '',
                transform: activeSize === i ? 'scale(1.3)' : '',
                color: activeSize === i ? '#E0E0E0' : '',
                backgroundColor: activeSize === i ? '#403F3F' : '',

                transition: 'all 0.2s',
              }}
              onClick={e => {
                sizeDefiner(e, i);
              }}
            >
              {oneSize}
            </button>
          );
        })}
      </section>

      <section className={styles.quantity}>
        <p className={styles.option_name}>Quantity:</p>
        <div className={styles.actions_cont}>
          <button
            className={styles.quantity_icon}
            onClick={() => {
              if (quantity < 2) return;
              else {
                setQuantity(quantity => quantity - 1);
              }
            }}
            disabled={quantity < 2 || !coloritta || !sizeOpt}
          >
            <RemoveIcon />
          </button>
          <span
            style={{
              fontSize: '20px',
            }}
          >
            {quantity}
          </span>
          <button
            className={styles.quantity_icon}
            disabled={quantity == stock || !coloritta || !sizeOpt}
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
      </section>

      <section className={styles.total_price}>
        <p className={styles.option_name}>Total Price:</p>

        <span className={styles.price}>
          {quantity * price}
          <img
            src="https://www.meshque.com/img/aznPink.svg"
            className={styles.logo}
            alt="azn"
          />
        </span>
      </section>
      <section>
        <button className={styles.action_btn} onClick={addToBasket}>
          Add to Cart
        </button>
      </section>
    </div>
  );
}

export default ItemInfo;
