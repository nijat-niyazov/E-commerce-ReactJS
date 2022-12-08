import React, { useEffect } from 'react';
import Products from '../Components/Products';
import Slider from '../Components/Slider';

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
