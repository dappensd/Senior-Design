// FilterSort.js
import React from 'react';
import styles from './FilterSort.module.css';

const FilterSort = ({ filter, onFilterChange, sort, onSortChange }) => {
  return (
    <div className={styles.filterSortContainer}>
      <div className={styles.filterContainer}>
        <label htmlFor="filter" className={styles.filterLabel}>Filter by:</label>
        <select
          id="filter"
          className={styles.filterSelect}
          value={filter}
          onChange={e => onFilterChange(e.target.value)}
        >
          {/* Replace with actual filter options */}
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className={styles.sortContainer}>
        <label htmlFor="sort" className={styles.sortLabel}>Sort by:</label>
        <select
          id="sort"
          className={styles.sortSelect}
          value={sort}
          onChange={e => onSortChange(e.target.value)}
        >
          {/* Replace with actual sort options */}
          <option value="Name">Name</option>
          <option value="Status">Status</option>
          <option value="LastActive">Last Active</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSort;
