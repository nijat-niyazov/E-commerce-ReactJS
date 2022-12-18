import React from 'react';
import Typography from '@mui/material/Typography';

function Info({ content }) {
  return (
    <Typography align="center" mt={3} variant="h4" component="div">
      {content}
    </Typography>
  );
}

export default Info;
