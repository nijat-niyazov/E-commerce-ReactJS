import React from 'react';
import { useSelector } from 'react-redux';
import FavItem from './FavItem';
import styles from '../Products/Products.module.css';
import Info from '../ZedComps/Typography';

function Favorites() {
  const { favorites } = useSelector(state => state.favorite);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Favorites</h1>
      {favorites.length === 0 ? (
        <Info content={'You have no any product as favorite'} />
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
