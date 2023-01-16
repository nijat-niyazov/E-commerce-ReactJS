import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFiltered,
  searchQuery,
  clearQuery,
} from '../../redux/slices/filteredSlice';
import { useLocation } from 'react-router-dom';
import useFetch from '../../utils/useFetch';

const SearchBar = () => {
  const { data } = useFetch('../data/data.json');
  const { products } = data;
  const { query } = useSelector(state => state.filtered);
  const dispatch = useDispatch();
  const route = useLocation();
  const { favorites } = useSelector(state => state.favorite);

  useEffect(() => {
    dispatch(clearQuery());
  }, [route.pathname]);

  const favFilter = route.pathname.slice(1);
  console.log(favFilter === 'favorites');

  const findProduct = searchedQuery => {
    if (!searchedQuery) {
      dispatch(setFiltered([]));
    } else {
      dispatch(
        setFiltered(
          (favFilter === 'favorites' ? favorites : products)?.filter(p =>
            p.description.toLowerCase().includes(searchedQuery)
          )
        )
      );
    }
  };

  const submitHandle = e => {
    e.preventDefault();
    findProduct(query);
  };

  return (
    <div style={{ opacity: '0.5', borderRadius: '50px' }}>
      <form style={{ borderRadius: '50px' }} onSubmit={submitHandle}>
        <TextField
          style={{ borderRadius: '50px' }}
          id="search-bar"
          className="text"
          onChange={e => {
            findProduct(e.target.value);
            dispatch(searchQuery(e.target.value));
          }}
          value={query}
          label="Enter a product name"
          variant="outlined"
          placeholder="Search item or brand"
          size="small"
        />
        <IconButton type="submit" aria-label="search">
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
