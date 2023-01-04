import React, { useState } from 'react';
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

  const getID = e => {
    console.log(e.target);
    console.log(e.target.id);
    setIndexOfImg(e.target.id);

    // e.target.classList.add('mystyle');
  };

  return (
    <div className={styles.product_item}>
      <ul style={{ cursor: 'pointer' }}>
        {productImages.map((img, i) => {
          return (
            <li
              key={i}
              style={{
                marginBottom: '20px',
              }}
            >
              <img
                id={i}
                style={{
                  height: '58px',
                  border: '1px solid black',
                  padding: '0 40px',
                  opacity: '0.5',
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
        <ItemInfo {...productInfo} />
      </section>
    </div>
  );
}

export default ItemImgs;
