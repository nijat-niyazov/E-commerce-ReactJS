import React from 'react';
// import styles from '../styles/Basket.module.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/slices/basketSlice';
import { toast } from 'react-toastify';
import styles from './Basket.module.css';

function BasketItem(props) {
  const { color, image, name, price, quantity, size, id } = props;

  const dispatch = useDispatch();

  const deleteHandle = id => {
    dispatch(deleteProduct(id));
    toast.error(
      `You deleted ${quantity}  ${quantity > 1 ? 'items' : 'item'} from basket!`
    );
  };

  return (
    <div>
      <section className={styles.basket}>
        <article className={styles.item}>
          <div className={styles.left}>
            <img className={styles.item_img} src={image} alt={image} />

            <div>
              <h4>{name}</h4>
              <p>Color: {color} </p>
              <p>Size: {size} </p>
              <p>Quantity: {quantity} </p>
            </div>
          </div>

          <div className={styles.right}>
            <button
              onClick={() => {
                deleteHandle(id);
              }}
              className={styles.deleteBtn}
            >
              <HighlightOffIcon />
            </button>
            <div className={styles.price_cont}>
              <span className={styles.price}>{price * quantity}</span>
              <img
                src="https://www.meshque.com/img/aznPink.svg"
                style={{ width: '12px', height: '10px' }}
                alt="azn"
              />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default BasketItem;
