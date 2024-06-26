import React,{useState} from "react";

import Navbar from "./Components/Navbar";
import {Outlet} from "react-router";
// import "./App.css";

function App() {
  
  return (
  
   <>
   <Navbar />
    {/* <Navbar searchValue = {search} handleChange = {handleChange} handleClick ={handleClick}/> */}
   <Outlet />
   </>
  );
}

export default App;
