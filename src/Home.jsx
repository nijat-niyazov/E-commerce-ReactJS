import React from 'react';
import DividerText from './Components/ZedComps/Divider';
import Products from './Components/Products/Products';
import Slider from './Components/Slider/Slider';

function Home() {
  return (
    <div>
      <Slider />
      <div style={{ width: '1127px', margin: 'auto' }}>
        <DividerText content={'Bestsellers'} />
        <Products />
      </div>
    </div>
  );
}

export default Home;
