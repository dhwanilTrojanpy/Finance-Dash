import {createBrowserRouter} from "react-router-dom";
import App from '../App';
import HomePage from "../Pages/HomePage";
import SearchPage from "../Pages/SearchPage";
import CompanyPage from '../Pages/CompanyPage';
import React from "react";
export const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            { path : "" , element : <HomePage/> },
            { path : "search" , element : <SearchPage/> },
            { path : "company:ticker" , element : <CompanyPage/> },

        ]
    }
]);