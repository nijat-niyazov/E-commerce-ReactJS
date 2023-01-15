import React, { useState } from 'react';
import styles from './ProductItem.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { openModaL } from '../../redux/slices/basketSlice';
import { setFavorites } from '../../redux/slices/favoriteSlice';
import { Link } from 'react-router-dom';
import OrderDetails from '../OrderDetailsForm/OrderDetails';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { toast } from 'react-toastify';
// import { nanoid } from '@reduxjs/toolkit';

function ProductItem({
  description,
  mainImg,
  price,
  colors,
  sizes,
  stock,
  id,
  hoverImg,
  index,
}) {
  // const id = nanoid();

  const i = e => {
    const el = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    console.log(el);
  };

  const { ordered } = useSelector(state => state.basket);
  const dispatch = useDispatch();
  const [favEl, setFavEl] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const addToWishList = e => {
    dispatch(
      setFavorites({
        name: description,
        size: sizes,
        color: colors,
        price: price,
        stock: stock,
        image: mainImg,
        id: id,
        fav: isClicked,
      })
    );
    toast.success('You added one item to favorites');
    setIsClicked(fav => !fav);
    // i(e);
  };

  return (
    <div className={styles.productItem}>
      <Link to={`item/${id}`}>
        <LazyLoadImage
          effect="blur"
          src={mainImg}
          className={styles.product_img}
        />
      </Link>
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
        <button
          onClick={addToWishList}
          className={styles.favButCont}
          style={{
            color: isClicked ? '#d8127d' : '#f0ecec',
            backgroundColor: isClicked ? '#f0ecec' : 'transparent',
            borderRadius: '10%',
            padding: '4px',
          }}
        >
          <FavoriteIcon className={styles.favBut} />
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
