import React from 'react';
import styles from '../styles/ProductItem.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ProductItem({ description, hoverImg, mainImg, price }) {
  return (
    <div className={styles.productItem}>
      <img src={mainImg} alt="title" />
      <div
        className={styles.productItemNav}
        // display="flex"
        // justifyContent="center"
      >
        <button className={styles.productItemButton}>Add to Cart</button>
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
