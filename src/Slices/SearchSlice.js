import { createSlice } from '@reduxjs/toolkit';


export const searchSlice = createSlice({
    initialState : "",
    name : "search",
    reducers : {    
        searchedInSearchBox : (state,action) => {
            return action.payload;
            }
        },
})

export const { searchedInSearchBox } = searchSlice.actions;

export default searchSlice.reducer;
