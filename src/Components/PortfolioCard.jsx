import React from 'react'
import Card from './Card';
function PortfolioCard({portfolio,removeFromPortfolio}) {
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
                  removeFromPortfolio = {(stock) => (removeFromPortfolio(val))}
                />
              );
            })
          )} 
        </>
      );
    }

export default PortfolioCard
