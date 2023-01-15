import React from 'react';
import styles from '../Products/ProductItem.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { openModaL } from '../../redux/slices/basketSlice';
import OrderDetails from '../OrderDetailsForm/OrderDetails';
import { removeFavorite } from '../../redux/slices/favoriteSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { toast } from 'react-toastify';
import { nanoid } from '@reduxjs/toolkit';

function FavItem({ name, image, price, color, size, stock, id }) {
  const { ordered } = useSelector(state => state.basket);
  const dispatch = useDispatch();
  // const id = nanoid();

  return (
    <div className={styles.productItem}>
      <LazyLoadImage src={image} className={styles.product_img} />
      <div className={styles.productItemNav}>
        <button
          className={styles.addToCartBtn}
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
        <button
          className={styles.favButCont}
          onClick={() => {
            toast.error('You removed item from favorites');
            return dispatch(removeFavorite(id));
          }}
        >
          <FavoriteIcon className={styles.favBut} />
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
