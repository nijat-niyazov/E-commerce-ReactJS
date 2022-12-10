import React from 'react';
import styles from '../styles/ProductItem.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { openModaL } from '../redux/slices/basketSlice';
import OrderDetails from './OrderDetails';
import { removeFavorite } from '../redux/slices/favoriteSlice';
import { nanoid } from '@reduxjs/toolkit';

function FavItem({ name, image, price, color, size, stock }) {
  const { ordered } = useSelector(state => state.basket);
  const dispatch = useDispatch();
  const id = nanoid();

  return (
    <div className={styles.productItem}>
      <img src={image} alt="title" />
      <div className={styles.productItemNav}>
        <button
          className={styles.productItemButton}
          onClick={() => dispatch(openModaL())}
        >
          Add to Cart
        </button>
        {ordered && (
          <div>
            <OrderDetails
              colors={color}
              price={price}
              sizes={size}
              stock={stock}
              description={name}
              img={image}
              id={id}
            />
          </div>
        )}
        <button onClick={() => dispatch(removeFavorite(id))}>
          <FavoriteIcon className={styles.productItemFavButRem} />
        </button>
      </div>
      <div className={styles.product_info}>
        <p className={styles.productTitle}>{name}</p>
        <p className={styles.productPrice}>{price}</p>
      </div>
    </div>
  );
}

export default FavItem;
