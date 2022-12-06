import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/slices/basketSlice';
import styles from '../styles/OrderDetails.module.css';

function OrderDetails({ colors, price }) {
  const { ordered } = useSelector(state => state.basketReducer);
  // console.log(ordered);
  console.log(colors);

  const dispatch = useDispatch();

  const closeSubMenu = () => {
    dispatch(closeModal());
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_inner}>
        <h1 onClick={closeSubMenu} style={{ textAlign: 'center' }}>
          X
        </h1>
        <h2>Features</h2> <br />
        <h4>Size</h4>
        <input type="radio" />
        <label htmlFor="">OneSize</label>
        <hr />
        <div>
          <h4>Color</h4>
          {colors.map(color => {
            // console.log(color);
            return (
              <div>
                <input type="radio" value={color} />
                <label htmlFor="">{color}</label>
              </div>
            );
          })}
        </div>
        <h4 className="block-title">
          Total price: {price}
          <span>
            <img
              src="https://www.meshque.com/img/aznPink.svg"
              alt="AZN"
              style={{ width: '20px' }}
            />
          </span>
        </h4>
      </div>
    </div>
  );
}

export default OrderDetails;
