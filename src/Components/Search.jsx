import React, { useState } from 'react';

const Search = () => {

    const [search, setSearch] = useState("");

  return (
    <div className="search-container" style={{ width: '30rem', margin: '10px' }}>
     <div className="input-group">
        <input
          type="text"
          placeholder="Search..."
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-secondary" type="button">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
