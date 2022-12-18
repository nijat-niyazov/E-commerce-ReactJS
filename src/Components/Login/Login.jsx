import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Typography } from '@mui/material';
import styles from './Login.module.css';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [active, setActive] = useState(1);
  const [mail, setMail] = useState('');
  const [pas, setPas] = useState('');

  const signIn = () => {
    if (active === 0) setActive(1);
  };
  const signUp = () => {
    if (active === 1) setActive(0);
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div style={{ marginBottom: '30px ' }}>
      <Box
        sx={{
          borderRadius: '20px',
          p: '20px',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <h2>Hello</h2>
        <p>Welcome again</p>
      </Box>
      <Box
        sx={{
          borderRadius: '20px',
          p: '40px',
          width: 550,
          height: 550,
          backgroundColor: '#f8ecec ',
          // opacity: 0.9,
          margin: 'auto ',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button
            variant="contained"
            color="success"
            onClick={signIn}
            value={active}
          >
            Sign In
          </Button>

          <Button
            onClick={signUp}
            value={active}
            variant="contained"
            color="secondary"
          >
            Sign Up
          </Button>
        </div>
        <div className="hoqq" style={{ marginLeft: '80px' }}>
          <TextField
            sx={{ width: '80%', mt: '30px' }}
            onChange={e => setMail(e.target.value)}
            value={mail}
            id="outlined-search"
            label="Email addres"
            placeholder="user123@gmail.com"
            type="search"
          />
          <FormControl sx={{ width: '80%', mt: '30px' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              onChange={e => setPas(e.target.value)}
              value={pas}
            />
          </FormControl>
          <Typography
            sx={{ mt: '30px', textDecoration: 'underline', cursor: 'pointer' }}
            variant="p"
            component="p"
          >
            Forgot Password?
          </Typography>
          <Button
            sx={{
              mt: '30px',
              width: '80%',
              background: 'orangered',
              '&:hover': {
                backgroundColor: 'red',
              },
            }}
            variant="contained"
            color="success"
            disabled={!(mail && pas)}
          >
            {`Sign ${active === 1 ? 'In' : ' Up'}`}
          </Button>
          <div className={styles.login_with}>
            <a href="https://www.facebook.com">
              <Box
                sx={{
                  display: 'flex',
                  // justifyContent: 'space-between',
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
        </div>
      </Box>
    </div>
  );
}
