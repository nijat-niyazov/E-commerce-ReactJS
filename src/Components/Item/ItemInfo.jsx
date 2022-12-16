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
  };

  return (
    <div>
      <h2>{description}</h2>
      <p>{price}</p>
      <h4>fetaures</h4>
      <section className={styles.colors}>
        <p style={{ marginRight: '12px' }}>Colors:</p>
        {colors.map((oneColor, i) => {
          return (
            <button
              key={i}
              className={styles.color}
              style={{
                backgroundColor: `${oneColor}`,
              }}
              value={oneColor}
              onClick={e => {
                console.log(e.target);
                setColoritta(e.target.value);
              }}
            ></button>
          );
        })}
      </section>
      <section className={styles.sizes}>
        <p style={{ marginRight: '12px' }}>Sizes:</p>
        {sizes.map((oneSize, i) => {
          return (
            <button
              key={i}
              className={styles.size}
              value={oneSize}
              onClick={e => {
                console.log(e.target.value);
                setSizeOpt(e.target.value);
              }}
            >
              {oneSize}
            </button>
          );
        })}
      </section>
      <section className={styles.sizes}>
        <p style={{ marginRight: '12px' }}>Quantity:</p>
        <button
          className={styles.quantity_icon}
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
        <span>{quantity}</span>
        <button
          className={styles.quantity_icon}
          disabled={!coloritta || !sizeOpt}
          onClick={() => {
            if (quantity === stock) return;
            else {
              setQuantity(quantity => quantity + 1);
            }
          }}
        >
          <AddIcon />
        </button>
      </section>
      <section>
        <p style={{ marginRight: '12px' }}>Total Price:</p>
        <span>{quantity * price}</span>
      </section>
      <section>
        <button onClick={addToBasket}>Add to Cart</button>
      </section>
    </div>
  );
}

export default ItemInfo;
