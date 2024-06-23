import React from 'react'
import Card from './Card';
import Search from "./Search";

function CardList() {
  return (
    <>
    <Search />
    <Card stockName = "Microsoft" ticker = "MSFT" price = {100} />
    <Card stockName = "Apple" ticker = "APPL" price = {200} />
    <Card stockName = "Tesla" ticker = "TSLA" price = {1000} />
    </>
  )
}

export default CardList;
