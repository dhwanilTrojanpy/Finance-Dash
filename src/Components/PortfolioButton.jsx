import React from 'react'

function PortfolioButton({addPortfolio,buttonText }) {
  return (
    <div>
      <button className="btn btn-primary" onClick={addPortfolio}>{buttonText}</button>
    </div>
  )
}

export default PortfolioButton;
