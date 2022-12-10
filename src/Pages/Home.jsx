import React from 'react';
import Products from '../Components/Products/Products';
import Slider from '../Components/Slider/Slider';

function Home() {
  return (
    <div>
      <Slider />
      <h1>Bestsellers</h1>
      <Products />
    </div>
  );
}

export default Home;
