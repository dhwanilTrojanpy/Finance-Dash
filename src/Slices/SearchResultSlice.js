import { createSlice } from '@reduxjs/toolkit';

export const searchResultSlice = createSlice({
    initialState : [],
    name : "searchResult",
    reducers : {
        addToSearchResult : (action) => {
            const stock = action.payload;
            return [stock];  
        }
        },
})

export const { addToSearchResult } = searchResultSlice.actions;

export default searchResultSlice.reducer;
