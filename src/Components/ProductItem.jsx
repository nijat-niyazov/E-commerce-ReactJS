import React from 'react';
import styles from '../styles/ProductItem.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { openModaL } from '../redux/slices/basketSlice';
import OrderDetails from './OrderDetails';
import { setFavorites } from '../redux/slices/favoriteSlice';
import { nanoid } from '@reduxjs/toolkit';

function ProductItem({
  description,
  hoverImg,
  mainImg,
  price,
  colors,
  sizes,
  stock,
  // id,
}) {
  const { ordered } = useSelector(state => state.basket);
  const dispatch = useDispatch();
  const id = nanoid();

  // console.log(id);

  const addToWishList = () => {
    dispatch(
      setFavorites({
        name: description,
        size: sizes,
        color: colors,
        price: price,
        stock: stock,
        image: mainImg,
        id: id,
      })
    );
  };

  return (
    <div className={styles.productItem}>
      <img src={mainImg} alt="title" />
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
              colors={colors}
              price={price}
              sizes={sizes}
              stock={stock}
              description={description}
              img={mainImg}
              id={id}
            />
          </div>
        )}
        <button onClick={addToWishList}>
          <FavoriteIcon className={styles.productItemFavBut} />
        </button>
      </div>
      <div className={styles.product_info}>
        <p className={styles.productTitle}>{description}</p>
        <p className={styles.productPrice}>{price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
