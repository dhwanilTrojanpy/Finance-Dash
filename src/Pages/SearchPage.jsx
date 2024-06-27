import React from "react";
import CardList from "../Components/CardList"
import PortfolioCard from "../Components/PortfolioCard";
import { useDispatch, useSelector } from 'react-redux';
import { addToPortfolio, removeFromPortfolio } from '../Slices/PortfolioSlice';

 
function SearchPage() {
    const dispatch = useDispatch();
    const portfolio = useSelector(state => state.portfolio);
    const searchResult = useSelector(state => state.searchResult);
    const isSearched = useSelector(state => state.isSearched);

    console.log("searchResult",searchResult);
    // const [searched, SetSearched] = useState(false);
  
    const addPortfolio = (stock) =>{  
        dispatch(addToPortfolio(stock));
    }
  
    const removePortfolio = (stock) => {
        dispatch(removeFromPortfolio(stock));

    }
  
  return (
    <div className="App">
    <PortfolioCard portfolio={portfolio} removeFromPortfolio= {removePortfolio}/>
    <CardList searchResult = {searchResult} searched = {isSearched} addPortfolio = {addPortfolio}/>
    </div>
  )
}

export default SearchPage
