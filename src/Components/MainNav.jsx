import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';

function MainNav() {
  const [menu, setMenu] = useState(false);

  const openMenu = e => {
    const coords = e.target.getBoundingClientRect();
    console.log(coords);
    const { right, left } = coords;
    const center = `${right + left}` / 2;
    console.log(center);
    setMenu(true);
    // const center =
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
          <li className={styles.right_element} onClick={openMenu}>
            ru
          </li>
          <li
            className={styles.right_element}
            // onMouseLeave={() => setMenu(false)}
            onClick={openMenu}
          >
            <SettingsIcon />
            {menu && (
              <div className={styles.menu}>
                <select name="" id="">
                  <option value="Canada">Canada</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Russia">Russia</option>
                </select>
              </div>
            )}
          </li>
          <li className={styles.right_element} onClick={openMenu}>
            <FavoriteIcon />
          </li>
          <li className={styles.right_element}>
            <ShoppingCartIcon />
          </li>
          <li className={styles.content}>0</li>
          <li className={styles.right_element}>
            <LogoutIcon />
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default MainNav;
