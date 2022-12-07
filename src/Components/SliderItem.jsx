import React from 'react';
import { Paper, Button } from '@mui/material';

function SliderItem({ name, img }) {
  return (
    <Paper>
      <img
        src={img}
        alt={name}
        style={{
          width: '1519px',
          height: '500px',
          display: 'flex',
          justifyContent: 'center',
        }}
      />
      <h2>{name}</h2>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default SliderItem;
