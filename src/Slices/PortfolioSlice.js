import { createSlice } from '@reduxjs/toolkit';

export const portfolioSlice = createSlice({
    initialState : [],
    name : "portfolio",
    reducers : {
        addToPortfolio : (state,action) => {
            console.log(action.payload)
            const stock = action.payload;
            if(!state.find(val => val.symbol === stock.symbol)){
                state.push(stock);
            }
        },
        removeFromPortfolio : (state,action) => {
            const stock = action.payload;
            return state.filter(val => val.symbol !== stock.symbol)
            
        }   
    }
})

export const { addToPortfolio, removeFromPortfolio } = portfolioSlice.actions;

export default portfolioSlice.reducer;
