import React, { useState } from 'react';
import styles from '../Products/ProductItem.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModaL } from '../../redux/slices/basketSlice';
import OrderDetails from '../OrderDetailsForm/OrderDetails';
import { removeFavorite } from '../../redux/slices/favoriteSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { toast } from 'react-toastify';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

function FavItem(
    {
    description,
    mainImg,
    price,
    color,
    size,
    stock,
    id,
  }

  // props
) {
  // console.log(props);

  const { ordered } = useSelector(state => state.basket);
  const dispatch = useDispatch();
  // const id = nanoid();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    dispatch(openModaL());
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(closeModal());
  };

  return (
    <div className={styles.productItem}>
      <Link to={`/item/${id}`}>
        <LazyLoadImage src={mainImg} className={styles.product_img} />
      </Link>
      <div className={styles.productItemNav}>
        <button className={styles.addToCartBtn} onClick={handleOpen}>
          Add to Cart
        </button>
        {ordered && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <OrderDetails
              colors={color}
              price={price}
              sizes={size}
              stock={stock}
              description={description}
              img={mainImg}
              id={id}
            />
          </Modal>
        )}
        <button
          className={styles.favButCont}
          onClick={() => {
            toast.error('You removed item from favorites');
            return dispatch(removeFavorite(id));
          }}
        >
          <FavoriteIcon className={styles.favBut} />
        </button>
      </div>
      <div className={styles.product_info}>
        <p className={styles.productTitle}>{description}</p>
        <p className={styles.productPrice}>{price}</p>
      </div>
    </div>
  );
}

export default FavItem;
