import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';
import { Popover, Typography } from '@mui/material';

function MainNav() {
  const { basket } = useSelector(state => state.basket);

  let sumOfQuantities = 0;
  sumOfQuantities =
    basket.length > 0
      ? basket.map(item => item.quantity).reduce((a, b) => a + b)
      : 0;

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
          <Link className={styles.left_el} to="/login">
            login
          </Link>
        </div>
      </section>

      <section className={styles.right}>
        <ul className={styles.right_elements}>
          <li className={styles.right_element}>az</li>
          <li className={styles.right_element}>ru</li>
          <li
            className={styles.right_element}
            // onMouseLeave={() => setMenu(false)}
            onClick={openMenu}
          >
            <SettingsIcon />
            {/* {menu && (
              <div className={styles.menu}>
                <select name="" id="">
                  <option value="Canada">Canada</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Russia">Russia</option>
                </select>
              </div>
            )} */}

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
            <li className={styles.right_element}>
              <ShoppingCartIcon />
            </li>
          </Link>
          <li className={styles.content}>{sumOfQuantities}</li>
          <li className={styles.right_element}>
            <LogoutIcon />
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default MainNav;
