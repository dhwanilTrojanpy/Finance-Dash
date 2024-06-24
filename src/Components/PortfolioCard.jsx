import React from 'react'
import Card from './Card';
function PortfolioCard({portfolio}) {
    return (
        <>
          {portfolio &&  (
            portfolio.map((val) => {
              return (
                <Card 
                  key={val.symbol} 
                  id={val.symbol} 
                  ticker={val.symbol} 
                  stockName={val.name}
                  stockExchange = {val.stockExchange}
                  exchangeShortName = {val.exchangeShortName} 
                  currency = {val.currency}
                  buttonText = "Remove"
                />
              );
            })
          )} 
        </>
      );
    }

export default PortfolioCard
