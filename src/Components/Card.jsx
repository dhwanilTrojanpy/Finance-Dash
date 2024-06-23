// src/StockCard.js
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ stockName, ticker, price }) => (
    <div className="card text-center" style={{ width: '30rem', margin: '10px' }}>
    <div className="card-header">
    ({stockName}{ticker})
    </div>
    <div className="card-body">
      <h5 className="card-title"> $: {price}</h5>
      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" className="btn btn-primary"> Details</a>
    </div>
    <div className="card-footer text-muted">
      2 days ago
    </div>
  </div>
);

Card.propTypes = {
  stockName: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
