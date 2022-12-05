import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function MainNav() {
  return (
    <nav className={styles.main_nav}>
      <section className={styles.left}>
        <img
          className={styles.nav_img}
          src="https://cdn.cubics.tech/meshque_logo.png"
          alt=""
        />
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
          <li className={styles.right_element}>sett</li>
          <li className={styles.right_element}>fav</li>
          <li className={styles.right_element}>cart</li>
          <li className={styles.content}>0</li>
          <li className={styles.right_element}>logout</li>
        </ul>
      </section>
    </nav>
  );
}

export default MainNav;
