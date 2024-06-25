import React from 'react';
import PropTypes from 'prop-types';
import PortfolioButton from './PortfolioButton';

const Card = ({ 
  stockName, 
  ticker,
  exchangeShortName,
  stockExchange,
  currency,
  addPortfolio,
  buttonText,
  removeFromPortfolio
 }) => (
    <div className="card text-center" style={{ width: '30rem', margin: '10px' }}>
    <div className="card-header">
    {stockName} ({ticker})
    </div>
    <div className="card-body">
      <h5 className="card-title"> {currency}</h5>
      <p className="card-text">{exchangeShortName}  : {stockExchange}</p>
      <PortfolioButton buttonText = {buttonText} addPortfolio = {addPortfolio} removeFromPortfolio={removeFromPortfolio}/>
    </div>
   
  </div>
);

Card.propTypes = {
  stockName: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  exchangeShortName : PropTypes.string.isRequired,
  stockExchange : PropTypes.string.isRequired,
  currency : PropTypes.string.isRequired,
};

export default Card;
