import { createSlice } from '@reduxjs/toolkit';


export const searchResultSlice = createSlice({
    initialState : [],
    name : "searchResult",
    reducers : {
        addToSearchResult : (state,action) => {
            return action.payload;
           
        }
        }
})

export const { addToSearchResult } = searchResultSlice.actions;

export default searchResultSlice.reducer;
