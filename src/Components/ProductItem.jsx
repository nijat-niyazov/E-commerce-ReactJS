import React from 'react';
import styles from '../styles/ProductItem.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/slices/basketSlice';
import OrderDetails from './OrderDetails';

function ProductItem({ description, hoverImg, mainImg, price, colors }) {
  const { ordered } = useSelector(state => state.basketReducer);
  // console.log(ordered);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(addProduct());
  };

  return (
    <div className={styles.productItem}>
      <img src={mainImg} alt="title" />
      <div
        className={styles.productItemNav}
        // display="flex"
        // justifyContent="center"
      >
        <button className={styles.productItemButton} onClick={openModal}>
          Add to Cart
        </button>
        {ordered && (
          <div>
            <OrderDetails colors={colors} price={price} />
          </div>
        )}
        <FavoriteIcon className={styles.productItemFavBut} />
      </div>
      <div className={styles.product_info}>
        <p className={styles.productTitle}>{description}</p>
        <p className={styles.productPrice}>{price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
