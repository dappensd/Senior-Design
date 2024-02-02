// SearchBar.js
import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className={styles.searchBar}
      placeholder="Search devices..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
