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
  <tr>
    <td>{stockName} ({ticker})</td>
    <td>{currency}</td>
    <td>{exchangeShortName}</td>
    <td>{stockExchange}</td>
    <td>
      <PortfolioButton buttonText={buttonText} addPortfolio={addPortfolio} removeFromPortfolio={removeFromPortfolio} />
    </td>
  </tr>
);

Card.propTypes = {
  stockName: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  exchangeShortName: PropTypes.string.isRequired,
  stockExchange: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  addPortfolio: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  // removeFromPortfolio: PropTypes.func.isRequired,
};

export default Card;