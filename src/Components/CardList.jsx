import React from 'react'
import Card from './Card';
import Search from "./Search";

function CardList() {
  return (
    <>
    <Search />
    <Card StockName = "Microsoft" ticker = "MSFT" price = "100" />
    <Card StockName = "Apple" ticker = "APPL" price = "200" />
    <Card StockName = "Tesla" ticker = "TSLA" price = "1000" />
    </>
  )
}

export default CardList;
