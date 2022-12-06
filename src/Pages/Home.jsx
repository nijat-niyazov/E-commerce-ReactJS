import React from 'react';
import Products from '../Components/Products';
import Slider from '../Components/Slider';
import Tutaqki from '../Components/Tutaqki';

function Home() {
  return (
    <div>
      <Tutaqki />
      <Slider />
      <Products />
    </div>
  );
}

export default Home;
