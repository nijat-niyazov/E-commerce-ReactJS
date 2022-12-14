import React from 'react';
import { useSelector } from 'react-redux';
import DividerText from '../Components/Divider';
import Products from '../Components/Products/Products';
import Slider from '../Components/Slider/Slider';
import Info from '../Components/Typography';

function Home() {
  const { query, filtered } = useSelector(state => state.filteredReducer);

  return (
    <div>
      <Slider />
      <div style={{ width: '1127px', margin: 'auto' }}>
        <DividerText content={'Bestsellers'} />
        {query && filtered.length < 1 ? (
          <Info content={'nothing'} />
        ) : (
          <Products />
        )}
      </div>
    </div>
  );
}

export default Home;
