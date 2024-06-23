// src/StockCard.js
import React from 'react';
import PropTypes from 'prop-types';

const StockCard = ({ photo, stockName, ticker, price }) => (
  <div className="card" style={{ width: '18rem' }}>
    <img className="card-img-top" alt={`${stockName} logo`} />
    <div className="card-body">
      <h5 className="card-title"> Microsoft</h5>
      <h6 className="card-subtitle mb-2 text-muted">MSFT</h6>
      <p className="card-text">$ 100</p>
    </div>
  </div>
);

StockCard.propTypes = {
  photo: PropTypes.string.isRequired,
  stockName: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default StockCard;
