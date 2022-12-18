import React, { useEffect } from 'react';
import styles from './FootPages.module.css';

export function About() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });

  return (
    <div className={styles.foot_page}>
      <br />
      <p style={{ margin: '0 0 1em', lineHeight: '1.4285em' }}>
        MESHQUE is the first of its kind “Made in Azerbaijan” gym apparel start
        up sourced and produced locally, using high quality premium textile.
      </p>
      <br />
      <p style={{ margin: '0 0 1em', lineHeight: '1.4285em' }}>
        Being a pioneer, we build a culture for better and healthier Azerbaijan
        by ushering in an era of stylish sportswear; sportswear that lets you
        define who you are and not the other way around.
      </p>
      <br />
      <p style={{ margin: '0 0 1em', lineHeight: '1.4285em' }}>
        Our online shop will guide and inspire you as we believe that sport is a
        lifestyle and, most importantly, sport is for everyone.
      </p>
      <br />
      <p style={{ margin: '0 0 1em', lineHeight: '1.4285em' }}>
        MESHQUE stands for presence, consciousness and health.
      </p>
      <br />
      <p style={{ margin: '0 0 1em', lineHeight: '1.4285em' }}>
        Take advantage of our educational online fitness platform where you can
        take special classes from famous Azerbaijani sportsmen and train from
        the comfort of your home.
      </p>
      <br />
      <p style={{ margin: '0 0 1em', lineHeight: '1.4285em' }}>
        Be bold, MESHQUE it up.
      </p>
      <br />
    </div>
  );
}

//  default About;
