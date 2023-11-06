import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlaying: [],
        trailerMovie: [],
        popularMovie: [],
        topRatedMovie: [],
        upcomingMovie: []
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlaying = action.payload
        },
        addTrailerMovie: (state, action) => {
            state.trailerMovie = action.payload
        },
        addPopularMovie: (state, action) => {
            state.popularMovie = action.payload
        },
        addTopRatedMovie: (state, action) => {
            state.topRatedMovie = action.payload
        },
        addUpcomingMovie: (state, action) => {
            state.upcomingMovie = action.payload
        }
    }
});

export const { addNowPlaying, addTrailerMovie, addPopularMovie, addTopRatedMovie, addUpcomingMovie } = movieSlice.actions;
export default movieSlice.reducer;