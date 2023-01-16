import React from 'react';
import { useSelector } from 'react-redux';
import DividerText from './Components/ZedComps/Divider';
import Products from './Components/Products/Products';
import Slider from './Components/Slider/Slider';
import Info from './Components/ZedComps/Typography';
import { Parent } from './Pages/Parent';

function Home() {
  const { query, filtered } = useSelector(state => state.filtered);

  return (
    <div>
      {/* <Parent /> */}
      <Slider />
      <div style={{ width: '1127px', margin: 'auto' }}>
        <DividerText content={'Bestsellers'} />
        {query && filtered.length < 1 ? (
          <Info content={'Nothing matches to your search query'} />
        ) : (
          <Products />
        )}
      </div>
    </div>
  );
}

export default Home;
