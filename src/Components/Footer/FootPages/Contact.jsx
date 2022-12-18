import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './FootPages.module.css';

export function Contact() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });

  return (
    <div className={styles.foot_page}>
      <p>MESHQUE LLC</p> <br />
      <p>80 Azadlig Avenue,&nbsp;</p> <br />
      <p>AZ1007,&nbsp;</p> <br />
      <p>Baku,&nbsp;</p> <br />
      <p>Azerbaijan</p> <br />
      <p>+994 (51) 4190091</p> <br />
      <p>+994 (51) 4190099</p> <br />
    </div>
  );
}
