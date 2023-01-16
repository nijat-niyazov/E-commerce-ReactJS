import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './Item.module.css';
import ItemInfo from './ItemInfo';

function ItemImgs({
  colors,
  description,
  id,
  mainImg,
  price,
  sizes,
  stock,
  productImages,
}) {
  const productInfo = {
    colors,
    description,
    id,
    mainImg,
    price,
    sizes,
    stock,
  };

  const [indexOfImg, setIndexOfImg] = useState(0);
  const [activeImg, setActiveimg] = useState(indexOfImg);

  const handleClick = page => {
    setActiveimg(page);
  };

  const getID = (e, p) => {
    setIndexOfImg(e.target.id);

    e.target.id == p && handleClick(p);
  };

  return (
    <div className={styles.product_item}>
      <ul style={{ cursor: 'pointer', marginLeft: '10px' }}>
        {productImages?.map((img, i) => {
           return (
            <li
              key={i}
              style={{
                marginBottom: '20px',
              }}
            >
              <LazyLoadImage
                effect="blur"
                id={i}
                style={{
                  height: '58px',
                  border: '1px solid black',
                  borderRadius: '2px',
                  padding: '0 40px',
                  opacity: i == activeImg ? '1' : '0.5',
                  transform: i == activeImg ? 'scale(1.5)' : '',
                  transition: 'opacity, transform 0.5s',
                }}
                src={img}
                alt={img}
                onClick={e => {
                  getID(e, i);
                }}
              />
            </li>
          );
        })}
      </ul>

      <section>
        <LazyLoadImage
          effect="blur"
          src={productImages?.[indexOfImg]}
          style={{
            width: '400px',
            height: '600px',
            margin: '0 50px',
            borderRadius: '5px',
            transition: 'all 3s ease-in-out 3s',
          }}
          alt="product_img"
        />
      </section>

      <section>
        <ItemInfo {...productInfo} />
      </section>
    </div>
  );
}

export default ItemImgs;
