import React, { useState, useEffect } from 'react';
import styles from './Item.module.css';
import ItemInfo from './ItemInfo';

function ItemImgs(props) {
  const {
    colors,
    description,
    hoverImg,
    id,
    mainImg,
    price,
    sizes,
    stock,
    productImages,
  } = props;

  const exi = [
    { colors, description, hoverImg, id, mainImg, price, sizes, stock },
  ];

  const [indexOfImg, setIndexOfImg] = useState(0);

  const getID = e => {
    setIndexOfImg(e.target.id);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '180px 560px 1fr',
        gap: '20px',
        margin: '20px',
        padding: '14px',
      }}
    >
      <ul>
        {productImages.map((img, i) => {
          return (
            <li
              key={i}
              style={{
                marginBottom: '20px',
              }}
            >
              <img
                className={styles.middle_img}
                id={i}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
                src={img}
                alt={img}
                onClick={getID}
              />
            </li>
          );
        })}
      </ul>

      <section>
        <img
          src={productImages[indexOfImg]}
          style={{
            width: '400px',
            height: '600px',
            margin: '0 50px',
          }}
          alt="product_img"
        />
      </section>

      <section>
        <ItemInfo {...exi} />
      </section>
    </div>
  );
}

export default ItemImgs;
