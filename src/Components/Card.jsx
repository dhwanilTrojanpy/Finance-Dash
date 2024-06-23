// src/StockCard.js
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ photo, stockName, ticker, price }) => (
  <div className="card" style={{ width: '18rem' }}>
    <img src={photo} className="card-img-top" alt={`${stockName} logo`} />
    <div className="card-body">
      <h5 className="card-title">{stockName}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{ticker}</h6>
      <p className="card-text">${price}</p>
    </div>
  </div>
);

Card.propTypes = {
  photo: PropTypes.string.isRequired,
  stockName: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
