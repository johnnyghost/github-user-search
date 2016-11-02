import React from 'react';
import styles from './search-input.css';

/**
 * Search input type
 * @type {Object}
 */
type SearchInputType = {
  onChange: ?Function
}

/**
 * <SearchInput />
 *
 * @return {JSXElement}
 */
const SearchInput = ({onChange}:SearchInputType):Object => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="search user"
      onChange= {onChange}
    />
  )
}

export default SearchInput;
