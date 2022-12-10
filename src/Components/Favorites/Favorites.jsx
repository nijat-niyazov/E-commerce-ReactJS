import React from 'react';
import { useSelector } from 'react-redux';
import FavItem from './FavItem';
import styles from '../Products/ProductItem.module.css';

function Favorites() {
  const { favorites } = useSelector(state => state.favorite);

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <div>
          <h2 className={styles.empty_cart}>
            You have no products in your cart
          </h2>
        </div>
      ) : (
        <div className={styles.products_cont}>
          {favorites.map((favoriteItem, i) => (
            <FavItem key={i} {...favoriteItem} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
