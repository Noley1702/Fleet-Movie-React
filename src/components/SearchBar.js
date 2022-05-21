import React, { useEffect } from 'react';
import "../styles/SearchBar.css";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({search, setsearch, searchFilm}) => {

  useEffect(() => {
    searchFilm();
  }, [search])


  return (
      <div className="container-btn-search">
        <TextField
          onChange={(e) => setsearch(e.target.value)}
          value={search}
          label="Rechercher"
          className='btn-search'
          InputProps={{
            endAdornment:
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>,
          }} />
      </div>


  );
};

export default SearchBar;
