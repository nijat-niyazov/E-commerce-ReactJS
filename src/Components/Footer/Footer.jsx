import React from 'react';
import styles from './Footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, Outlet } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <section className={styles.footer}>
        <div className={styles.footer_container}>
          <article className={styles.left}>
            <img
              className={styles.meshque_logo}
              src="https://cdn.cubics.tech/meshque_logo.png"
              alt=""
            />

            <nav className={styles.footer_navbar}>
              <section className={styles.categories}>
                <Link className={styles.categories_item} to="/contact">
                  Contacts and Addresses
                </Link>
                <Link className={styles.categories_item} to="/about">
                  About Company
                </Link>
                <Link className={styles.categories_item} to="/shipping">
                  Shipping and Payment
                </Link>
                <Link className={styles.categories_item} to="/return">
                  Return Policy
                </Link>
                <Link className={styles.categories_item} to="/privacy">
                  Privacy Policy
                </Link>
              </section>
            </nav>

            <Outlet />
          </article>

          <div className={styles.icons}>
            <a
              className={styles.icon}
              href="https://www.facebook.com/"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a
              className={styles.icon}
              href="https://www.instagram.com/"
              target="_blank"
            >
              <InstagramIcon />
            </a>
            <a
              className={styles.icon}
              href="https://www.whatsapp.com/"
              target="_blank"
            >
              <WhatsAppIcon />
            </a>
            <a
              className={styles.icon}
              href="https://www.youtube.com/"
              target="_blank"
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>

        <div className={styles.author}>
          <p>Meshque.com &copy; All rights reserved </p>
          <div className={styles.author_left}>
            <p>Powered by</p>
            <img
              className={styles.cubics}
              src="https://www.meshque.com/img/cubics-brands-white.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
