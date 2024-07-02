import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import {getCompanyDetails} from "../api";
import Sidebar from "../Components/Sidebar/Sidebar";
import Dashboard from '../Components/Dashboard';


function CompanyPage() {
  const {ticker} = useParams();
  const [companyDetails, setCompanyDetails] = useState();
  
  useEffect(() =>{
    const getCompany = async () =>{
      try {
        const result = await getCompanyDetails(ticker);
        setCompanyDetails(result.data[0]);
      } catch (error) {
        console.log("Unexpected error while getting companies details:",error);
      }
    }
    getCompany();
  },[ticker])
  console.log(companyDetails);  
  return (
    <>
    <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
    <Sidebar />
      <Dashboard/>
    </div>
    </>
  )
}

export default CompanyPage
