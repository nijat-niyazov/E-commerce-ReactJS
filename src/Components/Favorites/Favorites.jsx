import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FavItem from './FavItem';
import styles from '../Products/Products.module.css';
import Info from '../ZedComps/Typography';
import DividerText from '../ZedComps/Divider';

function Favorites() {
  const { favorites } = useSelector(state => state.favorite);
  const { query, filtered } = useSelector(state => state.filtered);

  useEffect(() => {
    window.scrollTo({ top: 198, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <DividerText content={'Favorites'} />
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
