import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchCompanies } from './api';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router';
import { searchedInSearchBox } from './Slices/SearchSlice';
import { addToSearchResult } from './Slices/SearchResultSlice';
import { isSearched } from './Slices/IsSearchedSlice';

function App() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const isSearchedResult = useSelector((state) => state.isSearched);

  const handleClick = async () => {
    dispatch(isSearched(!isSearchedResult));
    try {
      const result = await searchCompanies(search);
      if (Array.isArray(result)) {
        console.log(result);
        dispatch(addToSearchResult(result));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar
        searchValue={search}
        handleChange={(e) => dispatch(searchedInSearchBox(e.target.value))}
        handleClick={handleClick}
      />
      <Outlet />
    </>
  );
}

export default App;
