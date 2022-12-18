import React, { lazy } from 'react';
import styles from './ProductItem.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { openModaL } from '../../redux/slices/basketSlice';
import { setFavorites } from '../../redux/slices/favoriteSlice';
import { Link } from 'react-router-dom';
import OrderDetails from '../OrderDetailsForm/OrderDetails';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import { nanoid } from '@reduxjs/toolkit';
// const OrderDetails = lazy(() => import('../OrderDetailsForm/OrderDetails'));

function ProductItem({
  description,
  mainImg,
  price,
  colors,
  sizes,
  stock,
  id,
}) {
  const { ordered } = useSelector(state => state.basket);
  const dispatch = useDispatch();
  // const id = nanoid();

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

  // console.log(id);

  return (
    <div className={styles.productItem}>
      <Link to={`item/${id}`}>
        <LazyLoadImage
          effect="blur"
          src={mainImg}
          alt="title"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
      </Link>
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
