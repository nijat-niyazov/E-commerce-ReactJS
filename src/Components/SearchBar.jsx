import React, { useEffect } from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { searchQuery, setFiltered } from '../redux/slices/filteredSlice';

const SearchBar = () => {
  const { products } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const findProduct = searchedQuery => {
    if (!searchedQuery) {
      dispatch(setFiltered([]));
    } else {
      dispatch(
        setFiltered(
          products.filter(p =>
            p.description.toLowerCase().includes(searchedQuery)
          )
        )
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
            findProduct(e.target.value);
            dispatch(searchQuery(e.target.value));
          }}
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
