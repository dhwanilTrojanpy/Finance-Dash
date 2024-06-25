import React from 'react'
import Card from './Card';

function CardList({
  searchResult, 
  searched,
  addPortfolio
  }) {

  return (
    <>
      {searchResult.length > 0 ? (
        searchResult.map((val) => {
          return (
            <Card 
              key={val.symbol} 
              id={val.symbol} 
              ticker={val.symbol} 
              stockName={val.name}
              stockExchange = {val.stockExchange}
              exchangeShortName = {val.exchangeShortName} 
              currency = {val.currency}
              buttonText = "ADD"
              addPortfolio = {(stock) => (addPortfolio(val))}
            />
          );
        })
      ) : (
       searched && <h1>No Results Found</h1> 
      )}
    </>
  );
}

export default CardList;
