import { createSlice } from "@reduxjs/toolkit";


const searchReducer = createSlice({
    name: 'search',
    initialState: {
        searchMovieQuery: null
    },
    reducers: {
        searchMovies: (state, action) => {
            state.searchMovieQuery = action.payload
        }
    }
});

export const { searchMovies } = searchReducer.actions;
export default searchReducer.reducer;