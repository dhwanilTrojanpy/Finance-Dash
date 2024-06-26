import React from 'react';
import PropTypes from 'prop-types';
import Card from "./Card";

function CardList  ({ 
  searchResult, 
  searched, 
  addPortfolio 
}){
  return (
    <>
      {searchResult.length > 0 ? (
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
            {searchResult.map((val) => (
              <Card 
                key={val.symbol} 
                ticker={val.symbol} 
                stockName={val.name}
                stockExchange={val.stockExchange}
                exchangeShortName={val.exchangeShortName} 
                currency={val.currency}
                buttonText="ADD"
                addPortfolio={() => addPortfolio(val)}
              />
            ))}
          </tbody>
        </table>
      ) :searched && (
        <div className="alert alert-info text-center mt-3" role="alert">
          <h4 className="alert-heading">Your Search Result is Empty!</h4>
           {/* <p>Start Searching stocks to add it to portfolio </p> */}
        </div>
      )}
    </>
  );
  

} 
CardList.propTypes = {
  searchResult: PropTypes.array.isRequired,
  searched: PropTypes.bool.isRequired,
  addPortfolio: PropTypes.func.isRequired,
};

export default CardList;
