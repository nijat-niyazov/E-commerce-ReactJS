import React from 'react';
import styles from './Item.module.css';

function ItemInfo(props) {
  const { colors, description, hoverImg, id, mainImg, price, sizes, stock } =
    props[0];

  console.log(colors);

  return (
    <div>
      <h2>{description}</h2>
      <p>{price}</p>
      <h4>fetaures</h4>
      <section className={styles.colors}>
        <p style={{ marginRight: '12px' }}>Colors:</p>
        {colors.map((color, i) => {
          return (
            <button
              key={i}
              className={styles.color}
              style={{
                backgroundColor: `${color}`,
              }}
            ></button>
          );
        })}
      </section>
      <section className={styles.sizes}>
        <p style={{ marginRight: '12px' }}>Sizes:</p>
        {sizes.map((size, i) => {
          return (
            <button key={i} className={styles.size}>
              <span> {size} </span>
            </button>
          );
        })}
      </section>
    </div>
  );
}

export default ItemInfo;
