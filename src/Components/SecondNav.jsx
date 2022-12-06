import React from "react";
import styles from "../styles/SecNav.module.css";
import SearchAppBar from "./SearchBar";

function SecondNav() {
  return (
    <nav className={styles.second_nav}>
      <section>
        <ul className={styles.left}>
          <li className={styles.left_el}>NEW</li>
          <li className={styles.left_el}>Women</li>
          <li className={styles.left_el}>Men</li>
          <li className={styles.left_el}>Kids</li>
          <li className={styles.left_el}>Accessories</li>
          <li className={styles.left_el}>Outlet</li>
        </ul>
      </section>

      <section>
        <SearchAppBar />
      </section>
    </nav>
  );
}

export default SecondNav;
