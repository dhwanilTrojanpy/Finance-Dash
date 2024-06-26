import React from 'react';
import Card from './Card';

function PortfolioCard({ portfolio, removeFromPortfolio }) {
  return (
    <>
      {portfolio.length > 0 ? (
        <table className="table table-bordered table-striped">
          <thead className="thead-light">
            <tr>
              <th>Stock Name (Ticker)</th>
              <th>Currency</th>
              <th>Exchange Short Name</th>
              <th>Stock Exchange</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((val) => (
              <Card
                key={val.symbol}
                id={val.symbol}
                ticker={val.symbol}
                stockName={val.name}
                stockExchange={val.stockExchange}
                exchangeShortName={val.exchangeShortName}
                currency={val.currency}
                buttonText="Remove"
                removeFromPortfolio={() => removeFromPortfolio(val)}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-info text-center mt-3" role="alert">
          <h4 className="alert-heading">Your Portfolio is Empty!</h4>
          <p>Start adding stocks to your portfolio to track them.</p>
        </div>
      )}
    </>
  );
}

export default PortfolioCard;
