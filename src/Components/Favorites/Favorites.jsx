import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FavItem from './FavItem';
import styles from '../Products/Products.module.css';
import Info from '../ZedComps/Typography';

function Favorites() {
  const { favorites } = useSelector(state => state.favorite);
  const { query, filtered } = useSelector(state => state.filtered);

  useEffect(() => {
    window.scrollTo({ top: 128, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '25px' }}>Favorites</h1>
      {favorites.length < 1 && (
        <Info content={'You have no any product as favorite'} />
      )}
      {query && filtered.length < 1 && (
        <Info
          content={'There is no any product matches to your search query'}
        />
      )}
      <div className={styles.products_cont}>
        {(query || filtered.length > 1 ? filtered : favorites)?.map(
          (favoriteItem, i) => (
            <FavItem key={i} {...favoriteItem} />
          )
        )}
      </div>
    </div>
  );
}

export default Favorites;
