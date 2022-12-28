import React, { useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch } from 'react-redux';
import { deleteProduct, editQuantity } from '../../redux/slices/basketSlice';
import { toast } from 'react-toastify';
import styles from './Basket.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function BasketItem(props) {
  const { color, image, name, price, quantity, size, id, stock } = props;

  const [basketQuan, setBasketQuan] = useState(quantity);
  const dispatch = useDispatch();

  const deleteHandle = id => {
    dispatch(deleteProduct(id));
    toast.error(
      `You deleted ${quantity}  ${quantity > 1 ? 'items' : 'item'} from basket!`
    );
  };

  const submitHandle = (e, id) => {
    e.preventDefault();

    dispatch(
      editQuantity({
        id: id,
        quantity: basketQuan,
      })
    );
  };

  return (
    <div className={styles.basket}>
      <article className={styles.item}>
        <section className={styles.left}>
          <img className={styles.item_img} src={image} alt={image} />

          <div>
            <h4>{name}</h4>
            <p>Color: {color} </p>
            <p>Size: {size} </p>
            <p>Quantity: {quantity} </p>
          </div>
        </section>

        <form onSubmit={e => submitHandle(e, id)}>
          <Stack
            spacing={2}
            direction="row"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '30px',
            }}
          >
            <Button
              size="small"
              color="error"
              variant="contained"
              value="remove"
              onClick={() => setBasketQuan(b => b - 1)}
              disabled={basketQuan === 1}
            >
              <RemoveIcon />
            </Button>
            <span>{basketQuan}</span>
            <Button
              size="small"
              color="success"
              variant="contained"
              value="add"
              onClick={() => setBasketQuan(b => b + 1)}
              disabled={basketQuan === stock}
            >
              <AddIcon />
            </Button>
            <button> okay</button>
          </Stack>
        </form>

        <section className={styles.right}>
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
        </section>
      </article>
    </div>
  );
}

export default BasketItem;
