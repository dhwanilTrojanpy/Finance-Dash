import React from 'react';
import PropTypes from 'prop-types';

const Search = ({
  searchValue, 
  handleChange,
  handleClick
  }) => {

  return (
    <div className="search-container" style={{ width: '20rem', margin: '10px' }}>
  <div className="input-group">
    <input
      type="text"
      placeholder="Search..."
      className="form-control"
      value={searchValue}
      onChange={handleChange}
      style={{ marginRight: '10px' }} 
    />
    <button 
      className="btn btn-outline-success my-2 my-sm-0" 
      type="button"
      onClick={handleClick}
      style={{ marginLeft: '8px' }} 
    >
      Search
    </button>
  </div>
</div>
  );
};

Search.propTypes = {
  searchValue : PropTypes.string.isRequired,
  handleChange : PropTypes.func.isRequired,
  handleClick : PropTypes.func.isRequired
};

export default Search;
