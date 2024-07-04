import React from 'react';
import Card from './Card';

const Table = ({ headers, data, addPortfolio, buttonText, removeFromPortfolio }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((val) => (
               <Card 
               key={val.symbol} 
               ticker={val.symbol} 
               stockName={val.name}
               stockExchange={val.stockExchange}
               exchangeShortName={val.exchangeShortName} 
               currency={val.currency}
               buttonText={buttonText}
               addPortfolio={() => addPortfolio(val)}
               removeFromPortfolio={ ()=> removeFromPortfolio(val)}
               
             />
            ))}
      </tbody>
    </table>
  );
};

export default Table;
