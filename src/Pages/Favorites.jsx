import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavItem from '../Components/FavItem';
import styles from '../styles/Products.module.css';

function Favorites() {
  const { favorites } = useSelector(state => state.favoriteReducer);

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <div>
          <h2
            style={{
              maxWidth: '700px',
              margin: 'auto',
              padding: '1em ',
              textAlign: 'center',
              fontSize: '1.3rem',
              lineHeight: '1.4285em',
              color: 'rgba(0,0,0,.87)',
              fontWeight: '500',
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
            }}
          >
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
