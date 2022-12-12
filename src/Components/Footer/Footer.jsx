import React from 'react';
import styles from './Footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

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
            <nav>
              <div className={styles.footer_navbar}>
                <ul className={styles.categories}>
                  <Link to="/contact">
                    <li className={styles.categories_item}>
                      Contacts and Addresses
                    </li>
                  </Link>
                  <Link to="/about">
                    <li className={styles.categories_item}>About Company</li>
                  </Link>
                  <Link to="/shipping">
                    <li className={styles.categories_item}>
                      Shipping and Payment
                    </li>
                  </Link>
                  <Link to="/return">
                    <li className={styles.categories_item}>Return Policy </li>
                  </Link>
                  <Link to="/privacy">
                    <li className={styles.categories_item}>Privacy Policy</li>
                  </Link>
                </ul>
              </div>
            </nav>
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
