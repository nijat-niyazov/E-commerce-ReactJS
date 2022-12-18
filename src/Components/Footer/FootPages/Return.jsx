import styles from './FootPages.module.css';
import React, { useEffect } from 'react';

function Return() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 198, left: 0, behavior: 'smooth' });
  });
  return (
    <div className={styles.foot_page}>
      <h2>Return policies</h2> <br /> <br />
      <p>Return conditions don't exist</p>
    </div>
  );
}

export default Return;
