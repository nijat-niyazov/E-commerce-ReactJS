import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginWithAccs from './LoginWithAccs';
import { logIn, newUser } from '../../redux/slices/userSlice';
import { toast } from 'react-toastify';

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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

export default function LoginForm() {
  const { users } = useSelector(state => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = useState('in');
  const [sex, setSex] = useState('male');
  const [mail, setMail] = useState('');
  const [pas, setPas] = useState('');
  const [secPas, setSecPas] = useState('');

  const signUpNewUser = e => {
    e.preventDefault();
    if (active === 'in') {
      const registeredUser = users.some(user => user.mail === mail);
      if (registeredUser) {
        const attemtedUser = users.find(user => user.mail === mail);
        if (attemtedUser.password === pas) {
          toast.success('You succesfully logged in');
          dispatch(logIn());
          navigate('/') && window.location.reload(true);
        } else {
          toast.error('Your e-mail address and/or password is incorrect.');
        }
      } else {
        toast.error('Your e-mail address and/or password is incorrect.');
      }
    }
    if (active === 'up') {
      console.log(pas, secPas);
      if (pas === secPas) {
        dispatch(
          newUser({
            mail: mail,
            password: pas,
            gender: sex,
          })
        );
        toast.success('You succesfully signed up');
      } else {
        toast.info('Something Went Wrong :(') && window.location.reload(true);
      }
    }
  };

  const signIn = e => {
    e.target.value === 'in' ? setActive('in') : setActive('up');
  };

  // Password Issues ⤵
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = e => {
    e.preventDefault();
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
          height: '100%',
          backgroundColor: '#f8ecec ',
          margin: 'auto ',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button
            variant="contained"
            color="success"
            onClick={e => signIn(e)}
            value="in"
          >
            Sign In
          </Button>

          <Button
            onClick={e => signIn(e)}
            value="up"
            variant="contained"
            color="secondary"
          >
            Sign Up
          </Button>
        </div>
        <form
          className="hoqq"
          style={{ marginLeft: '80px' }}
          onSubmit={signUpNewUser}
        >
          <TextField
            sx={{ width: '80%', mt: '30px' }}
            onChange={e => setMail(e.target.value)}
            value={mail}
            id="outlined-search"
            label="Email addres"
            placeholder="user123@gmail.com"
            type="email"
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

          {active === 'up' && (
            <FormControl sx={{ width: '80%', mt: '30px' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="password"
                endAdornment={<InputAdornment position="end"></InputAdornment>}
                label="Confirm Password"
                onChange={e => setSecPas(e.target.value)}
                value={secPas}
              />
            </FormControl>
          )}
          {active === 'up' && (
            <FormControl style={{ marginTop: '40px' }}>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="male"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  onClick={e => setSex(e.target.value)}
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  onClick={e => setSex(e.target.value)}
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          )}

          {active === 'in' && (
            <Typography
              sx={{
                mt: '30px',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
              variant="p"
              component="p"
            >
              Forgot Password?
            </Typography>
          )}

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
            type="submit"
          >
            {`Sign ${active === 'in' ? 'In' : ' Up'}`}
          </Button>
          {active === 'in' && <LoginWithAccs />}
        </form>
      </Box>
    </div>
  );
}
