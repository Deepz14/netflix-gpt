import { createSlice } from "@reduxjs/toolkit";


const searchReducer = createSlice({
    name: 'search',
    initialState: {
        searchMovieQuery: null,
        movieResults: [],
        shimmerLoad: false
    },
    reducers: {
        searchMovies: (state, action) => {
            state.searchMovieQuery = action.payload
        },
        addMovieResults: (state, action) => {
            state.movieResults = action.payload
        },
        enableShimmerLoad: (state) => {
            state.shimmerLoad = true
        },
        disableShimmerLoad: (state) => {
            state.shimmerLoad = false
        }
    }
});

export const { searchMovies, addMovieResults, enableShimmerLoad, disableShimmerLoad } = searchReducer.actions;
export default searchReducer.reducer;