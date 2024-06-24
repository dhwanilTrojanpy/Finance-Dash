import React, {useState} from "react";
import CardList from "./Components/CardList";
import Search from "./Components/Search";
import {searchCompanies} from "./api";

function App() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [Searched, SetSearched] = useState(false);
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
  return (
    <div className="App">
    <Search searchValue = {search} handleChange = {handleChange} handleClick ={handleClick}/>
    <CardList searchResult = {searchResult} searched = {Searched}/>
    </div>
  );
}

export default App;
