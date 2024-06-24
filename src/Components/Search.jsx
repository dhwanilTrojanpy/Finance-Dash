import React from 'react';
import PropTypes from 'prop-types';

const Search = ({searchValue, handleChange,handleClick}) => {

  return (
    <div className="search-container" style={{ width: '30rem', margin: '10px' }}>
     <div className="input-group">
        <input
          type="text"
          placeholder="Search..."
          className="form-control"
          value={searchValue}
          onChange={handleChange}
        />
        <button 
        className="btn btn-primary ms-2" 
        type="button"
        onClick={handleClick}
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
