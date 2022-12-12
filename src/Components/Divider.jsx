import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',

  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
}));

export default function DividerText({ content }) {
  return (
    <Root>
      <Divider style={{ margin: ' 35px 0' }}>
        <Typography
          style={{ margin: '0 20px', letterSpacing: '1.5px' }}
          variant="h5"
        >
          {content}
        </Typography>
      </Divider>
    </Root>
  );
}
