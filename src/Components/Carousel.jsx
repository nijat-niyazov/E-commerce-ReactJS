import React from "react";
import Carousel from "react-material-ui-carousel";
import SliderItem from "./SliderItem";

import slider from "../data/slider.json";

function Slider() {
  console.log(slider);

  return (
    <Carousel>
      {slider.map((item, i) => (
        <SliderItem key={i} {...item} />
      ))}
    </Carousel>
  );
}

export default Slider;
