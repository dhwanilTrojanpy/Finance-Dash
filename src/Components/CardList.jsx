import React, {useState} from 'react'
import Card from './Card';
import Search from "./Search";

function CardList() {
  const [search, setSearch] = useState("");

  const handleChange = (e) =>{
    console.log(e)
    setSearch(e.target.value)
  }

  return (
    <>
    <Search searchValue = {search} handleChange = {handleChange} />
    <Card stockName = "Microsoft" ticker = "MSFT" price = {100} />
    <Card stockName = "Apple" ticker = "APPL" price = {200} />
    <Card stockName = "Tesla" ticker = "TSLA" price = {1000} />
    </>
  )
}

export default CardList;
