import React, { useState } from 'react';
import styles from './Basket.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/slices/basketSlice';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { toast } from 'react-toastify';
import ChangeQuantity from './AmountModal';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

function BasketItem(props) {
  const { color, image, name, price, quantity, size, id, stock } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  console.log(open);

  const deleteHandle = id => {
    dispatch(deleteProduct(id));
    toast.error(
      `You deleted ${quantity}  ${quantity > 1 ? 'items' : 'item'} from basket!`
    );
  };

  return (
    <div className={styles.basket}>
      <article className={styles.item}>
        <section className={styles.left}>
          <Link to={`/item/${id}`}>
            <img className={styles.item_img} src={image} alt={image} />
          </Link>
          <div>
            <h4>{name}</h4>
            <p>Color: {color} </p>
            <p>Size: {size} </p>
            <p>Quantity: {quantity} </p>
          </div>
        </section>

        <section>
          <Button
            onClick={handleOpen}
            sx={{
              mt: 1,
              fontSize: 16,
              textAlign: 'center',
              outlineColor: 'd8127d',
              color: '#red',
            }}
            size="small"
            color="error"
            variant="outlined"
          >
            Change Amount
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ChangeQuantity
              props={props}
              setOpen={setOpen}
              open={open}
              handleClose={handleClose}
            />
          </Modal>
        </section>

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
