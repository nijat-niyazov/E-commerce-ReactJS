import React from 'react';
import Carousel from 'react-material-ui-carousel';
import SliderItem from './SliderItem';
import useFetch from '../../utils/useFetch';

function Slider() {
  const { data } = useFetch('../data/data.json');
  const slider = data.slider;

  return (
    <Carousel
      autoPlay
      interval={5000}
      stopAutoPlayOnHover
      indicatorIconButtonProps={{
        style: {
          padding: '0 8px',
          color: '#333',
          width: '4px',
          height: '4px',
          fontSize: '4px',
          opacity: '0.5',
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          cursor: 'pointer',
          color: '#d8127d',
          opacity: '0.8',
        },
      }}
      indicatorContainerProps={{
        style: {
          textAlign: 'center', // 4
          position: 'absolute',
          bottom: '10px',
          zIndex: '5',
        },
      }}
    >
      {slider?.map((item, i) => (
        <SliderItem key={i} {...item} />
      ))}
    </Carousel>
  );
}

export default Slider;
