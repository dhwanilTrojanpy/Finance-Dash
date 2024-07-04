import React from 'react';
import PropTypes from 'prop-types';
import Card from "./Card";
import Table from './Table';
import {CardHeader} from "../headers";
function CardList  ({ 
  searchResult, 
  searched, 
  addPortfolio 
}){
  return (
    <>
   
      {searchResult.length > 0 ? (
         <Table headers = {CardHeader} data = {searchResult} addPortfolio = {addPortfolio} buttonText="ADD"/>
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
