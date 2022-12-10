import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const SearchBar = () => {
  const data = [
    'Paris',
    'London',
    'New York',
    'Tokyo',
    'Berlin',
    'Buenos Aires',
    'Cairo',
    'Canberra',
    'Rio de Janeiro',
    'Dublin',
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState(data);

  const findProduct = (query, data) => {
    if (!query) {
      return countries;
    } else {
      setCountries(
        data.map(d => d.toLowerCase()).filter(d => d.includes(query))
      );
    }
  };

  return (
    <div style={{ opacity: '0.5', borderRadius: '50px' }}>
      <form style={{ borderRadius: '50px' }}>
        <TextField
          style={{ borderRadius: '50px' }}
          id="search-bar"
          className="text"
          onChange={e => {
            setSearchQuery(e.target.value);
            findProduct(searchQuery, data);
            console.log(countries);
          }}
          value={searchQuery}
          label="Enter a product name"
          variant="outlined"
          placeholder="Search item or brand"
          size="small"
        />
        <IconButton
          type="submit"
          aria-label="search"
          onClick={e => {
            e.preventDefault();
            setSearchQuery('');
          }}
        >
          <SearchIcon
            style={{
              fill: '#333',
              position: 'absolute',
              right: '20px',
              top: '7px',
            }}
          />
        </IconButton>
      </form>
    </div>
  );
};

export default SearchBar;

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

// export default function SearchAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
