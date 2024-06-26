import React, {useState} from "react";
import CardList from "../Components/CardList"
import PortfolioCard from "../Components/PortfolioCard";
import {searchCompanies} from "../api";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { addToPortfolio, removeFromPortfolio } from '../Slices/PortfolioSlice';
import { searchedInSearchBox } from "../Slices/SearchSlice";
import { addToSearchResult } from "../Slices/SearchResultSlice";
 
function SearchPage() {
    const dispatch = useDispatch();
    const portfolio = useSelector(state => state.portfolio);
    const search = useSelector(state => state.search);
    const searchResult = useSelector(state => state.searchResult);
    
    const [searched, SetSearched] = useState(false);
  
    const handleChange = (e) =>{
        dispatch(searchedInSearchBox(e.target.value));
    }
    const handleClick = async () => {
      SetSearched(!searched)
      try {
        const result = await searchCompanies(search);
        if(Array.isArray(result)){
          console.log(result);  
          dispatch(addToSearchResult(result)); 
        }       
      } 
      catch (error) {
          console.log(error.message);
      }
    }
  
    const addPortfolio = (stock) =>{  
        dispatch(addToPortfolio(stock));
    }
  
    const removePortfolio = (stock) => {
        dispatch(removeFromPortfolio(stock));

    }
  
  return (
       <div className="App">
    {/* <Navbar searchValue = {search} handleChange = {handleChange} handleClick ={handleClick}/> */}
    <PortfolioCard portfolio={portfolio} removeFromPortfolio= {removePortfolio}/>
    <CardList searchResult = {searchResult} searched = {searched} addPortfolio = {addPortfolio}/>
    </div>
  )
}

export default SearchPage
