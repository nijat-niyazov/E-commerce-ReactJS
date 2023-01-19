import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { editQuantity } from '../../redux/slices/basketSlice';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { toast } from 'react-toastify';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 405,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};

export default function ChangeQuantity({ props, handleClose }) {
  const { quantity, id, stock } = props;
  const dispatch = useDispatch();
  const [basketQuan, setBasketQuan] = useState(quantity);
  const [clicked, setClicked] = useState(false);

  const loader = () => {
    const interval = setInterval(() => {
      setClicked(true);
      console.log(clicked);
    }, 10);

    return () => clearInterval(interval);
  };

  const [loading, setLoading] = useState(true);

  function handleClick() {
    setLoading(true);
  }

  const submitHandle = (e, id) => {
    e.preventDefault();

    const timer = setTimeout(() => {
      dispatch(
        editQuantity({
          id: id,
          quantity: basketQuan,
        })
      );
      handleClose();
      toast.info('You changed amount of your selected product ', {
        theme: 'light',
      });
    }, 500);

    return () => clearTimeout(timer);
  };

  return (
    <div>
      <form
        onSubmit={e => {
          submitHandle(e, id);
        }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 1, fontSize: 18, textAlign: 'center' }}
          >
            Change quantity of your choosen product
          </Typography>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: '30px',
            }}
          >
            <Stack
              spacing={2}
              direction="row"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button
                size="small"
                color="error"
                variant="contained"
                value="remove"
                onClick={() => setBasketQuan(b => b - 1)}
                disabled={basketQuan === 1}
              >
                <RemoveIcon />
              </Button>
              <span>{basketQuan}</span>
              <Button
                size="small"
                color="success"
                variant="contained"
                value="add"
                onClick={() => setBasketQuan(b => b + 1)}
                disabled={basketQuan === stock}
              >
                <AddIcon />
              </Button>
            </Stack>
            <span onClick={loader}>
              {clicked ? (
                <LoadingButton
                  size="small"
                  onClick={handleClick}
                  loading={loading}
                  variant="outlined"
                  disabled
                  sx={{
                    borderRadius: '10px',
                  }}
                >
                  <span>disabled</span>
                </LoadingButton>
              ) : (
                <Button size="small" variant="contained" type="submit">
                  OKAY
                </Button>
              )}
            </span>
          </div>
        </Box>
      </form>
    </div>
  );
}
