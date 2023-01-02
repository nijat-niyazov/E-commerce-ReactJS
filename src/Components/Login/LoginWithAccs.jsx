import React from 'react';
import { Button, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import styles from './Login.module.css';
import Box from '@mui/material/Box';

function LoginWithAccs() {
  return (
    <div className={styles.login_with}>
      <a href="https://www.facebook.com">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '80%',
          }}
        >
          <FacebookIcon />
          <p>Login with facebook</p>
        </Box>
      </a>
      <a href="https://www.google.com">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '80%',
          }}
        >
          <GoogleIcon />
          <p>Login with Google</p>
        </Box>
      </a>
    </div>
  );
}

export default LoginWithAccs;
