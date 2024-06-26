import { configureStore } from '@reduxjs/toolkit'
import  portfolioReducer  from '../Slices/PortfolioSlice'

export const store = configureStore({
  reducer: {
    portfolio : portfolioReducer,
  },
});