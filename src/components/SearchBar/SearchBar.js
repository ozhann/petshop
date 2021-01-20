import React from 'react';
import './searchbar.css';

const SearchBar = ({ updateSearchText, searchText }) => {
  return (
    <div>
      <div className="search-for-products">
        <h3>Search</h3>
        <input
          className="search-bar"
          placeholder="Search for products..."
          value={searchText}
          onChange={event => {
            updateSearchText(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
