import React from 'react';
import { Paper } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function SliderItem({ name, img }) {
  return (
    <Paper>
      <LazyLoadImage
        effect="blur"
        src={img}
        alt={name}
        style={{
          cursor: 'pointer',
          width: '1529px',
          height: '445.438px',
        }}
      />
    </Paper>
  );
}

export default SliderItem;
