import React from 'react'

function PortfolioButton({addPortfolio,buttonText,removeFromPortfolio }) {
  return (
    <div>
      {
        buttonText == "ADD" ? <button className="btn btn-outline-success my-2 my-sm-0" onClick={addPortfolio}>{buttonText}</button> :
        <button className="btn btn-outline-danger my-2 my-sm-0" onClick={removeFromPortfolio}>{buttonText}</button>
      }
      
    </div>
  )
}

export default PortfolioButton;
