import React, {useState} from "react";
import CardList from "./Components/CardList";
import Search from "./Components/Search";
import PortfolioCard from "./Components/PortfolioCard";
import {searchCompanies} from "./api";

function App() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searched, SetSearched] = useState(false);
  const [portfolio, setPortfolio] = useState([]);

  const handleChange = (e) =>{
    console.log(e)
    setSearch(e.target.value);
  }
  const handleClick = async () => {
    SetSearched(true)
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
    if(portfolio.find((val) => val.symbol === stock.symbol)){
      return ;
    }
    setPortfolio( prev => [...prev, stock]);
  }

  const removeFromPortfolio = (stock) => {
    const updatedPortfolio = portfolio.filter(val => val.id !== stock.id)
    setPortfolio(updatedPortfolio);

  }
  return (
    <div className="App">
    <PortfolioCard portfolio={portfolio} removeFromPortfolio= {removeFromPortfolio}/>
    <Search searchValue = {search} handleChange = {handleChange} handleClick ={handleClick}/>
    <CardList searchResult = {searchResult} searched = {searched} addPortfolio = {addPortfolio}/>
    </div>
  );
}

export default App;
