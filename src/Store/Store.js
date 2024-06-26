import { configureStore } from '@reduxjs/toolkit'
import  portfolioReducer  from '../Slices/PortfolioSlice'
import searchReducer from "../Slices/SearchSlice"
import searchResultReducer from "../Slices/SearchResultSlice";

export const store = configureStore({
  reducer: {
    portfolio : portfolioReducer,
    search : searchReducer,
    searchResult : searchResultReducer,
  },
});