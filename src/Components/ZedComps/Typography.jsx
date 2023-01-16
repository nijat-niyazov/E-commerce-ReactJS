import React from 'react';
import Typography from '@mui/material/Typography';

function Info({ content }) {
  return (
    <Typography
      style={{
        color: '#d8127d',
        fontStyle: 'italic',
        marginTop: '50px',
      }}
      align="center"
      mt={3}
      variant="h4"
      component="div"
    >
      {content}
    </Typography>
  );
}

export default Info;
