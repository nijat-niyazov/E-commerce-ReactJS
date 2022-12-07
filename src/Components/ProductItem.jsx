import React from 'react';
import styles from '../styles/ProductItem.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { openModaL } from '../redux/slices/basketSlice';
import OrderDetails from './OrderDetails';

function ProductItem({
  description,
  hoverImg,
  mainImg,
  price,
  colors,
  sizes,
  stock,
}) {
  const { ordered } = useSelector(state => state.basketReducer);
  const dispatch = useDispatch();

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
            />
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
