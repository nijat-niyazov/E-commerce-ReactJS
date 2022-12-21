import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { Popover, Typography } from '@mui/material';
import { logOut } from '../../redux/slices/userSlice';
import { toast } from 'react-toastify';

function MainNav() {
  const { basket } = useSelector(state => state.basket);
  const { userIn } = useSelector(state => state.users);
  const dispatch = useDispatch();

  const loggingOut = () => {
    dispatch(logOut());
    toast.error('You logged out');
  };

  let sumOfQuantities = 0;
  sumOfQuantities =
    basket.length > 0
      ? basket.map(item => item.quantity).reduce((a, b) => a + b)
      : 0;

  /////////////////////////////////////////////
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const openMenu = e => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <nav className={styles.main_nav}>
      <section className={styles.left}>
        <Link to="/">
          <img
            className={styles.nav_img}
            src="https://cdn.cubics.tech/meshque_logo.png"
            alt=""
          />
        </Link>
        <div>
          <Link className={(styles.left_el, styles.left_first)} to="/">
            Shop
          </Link>
          <Link className={styles.left_el} to="/">
            Workouts
          </Link>
        </div>
      </section>

      <section className={styles.right}>
        <ul className={styles.right_elements}>
          <li className={styles.right_element}>az</li>
          <li className={styles.right_element}>ru</li>
          <li className={styles.right_element} onClick={openMenu}>
            <SettingsIcon />
            <Popover
              onClose={handleClose}
              id={id}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: -150,
              }}
            >
              <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>
          </li>
          <Link to="/favorites">
            <li className={styles.right_element}>
              <FavoriteIcon />
            </li>
          </Link>
          <Link to="/basket">
            <li
              style={{ position: 'relative' }}
              className={styles.right_element}
            >
              <ShoppingCartIcon />
              <span className={styles.content}> {sumOfQuantities} </span>
            </li>
          </Link>
          {userIn && (
            <li className={styles.right_element} onClick={loggingOut}>
              <LogoutIcon />
            </li>
          )}
        </ul>
      </section>
    </nav>
  );
}

export default MainNav;
