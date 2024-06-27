import React from 'react';
import PropTypes from 'prop-types';
import PortfolioButton from './PortfolioButton';
import {Link} from "react-router-dom";

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
    <Link to={`/company/{ticker}`}>
    <td>{stockName} ({ticker})</td>
    </Link>
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
  addPortfolio: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
  removeFromPortfolio: PropTypes.func,
};

export default Card;