import React from 'react';
import { Paper } from '@mui/material';

function SliderItem({ name, img }) {
  return (
    <Paper>
      <img
        src={img}
        alt={name}
        style={{
          cursor: 'pointer',
          width: '1519px',
          height: '445.438px',
        }}
      />
    </Paper>
  );
}

export default SliderItem;
