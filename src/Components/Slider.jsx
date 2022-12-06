import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import SliderItem from './SliderItem';
import { useDispatch, useSelector } from 'react-redux';
import { setSlider } from '../redux/slices/sliderSlice';

function Slider() {
  let slider = useSelector(state => state.sliders.sliderItems);

  const dispatch = useDispatch();

  const makeSlider = () => {
    const fetchinImgs = async () => {
      const res = await fetch('http://localhost:8000/slider');
      const data = await res.json();

      dispatch(setSlider(data));
    };
    fetchinImgs();
  };

  useEffect(() => makeSlider(), []);

  return (
    <Carousel>
      {slider.map((item, i) => {
        // console.log(item);
        return <SliderItem key={i} {...item} />;
      })}
    </Carousel>
  );
}

export default Slider;
