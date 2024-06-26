import React, {useState} from "react";
import CardList from "../Components/CardList"
import PortfolioCard from "../Components/PortfolioCard";
import {searchCompanies} from "../api";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { addToPortfolio, removeFromPortfolio } from '../Slices/PortfolioSlice';


function SearchPage() {
    const dispatch = useDispatch();
    const portfolio = useSelector(state => state.portfolio);
    
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [searched, SetSearched] = useState(false);
        // const [portfolio, setPortfolio] = useState([]);
  
    const handleChange = (e) =>{
      console.log(e)
      setSearch(e.target.value);
    }
    const handleClick = async () => {
      SetSearched(!searched)
      try {
        const result = await searchCompanies(search);
        if(Array.isArray(result)){
          console.log(result);  
          setSearchResult(result);  
        }       
      } 
      catch (error) {
          console.log(error.message);
      }
    }
  
    const addPortfolio = (stock) =>{  
    //   if(portfolio.find((val) => val.symbol === stock.symbol)){
    //     return ;
    //   }
    //   setPortfolio( prev => [...prev, stock]);
        dispatch(addToPortfolio(stock));
    }
  
    const removePortfolio = (stock) => {
    //   const updatedPortfolio = portfolio.filter(val => val.symbol !== stock.symbol);
    //   setPortfolio(updatedPortfolio);
        dispatch(removeFromPortfolio(stock));

    }
  
  return (
       <div className="App">
    <Navbar searchValue = {search} handleChange = {handleChange} handleClick ={handleClick}/>
    <PortfolioCard portfolio={portfolio} removeFromPortfolio= {removePortfolio}/>
    <CardList searchResult = {searchResult} searched = {searched} addPortfolio = {addPortfolio}/>
    </div>
  )
}

export default SearchPage
