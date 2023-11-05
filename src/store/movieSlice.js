import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlaying: [],
        trailerMovie: [],
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlaying = action.payload
        },
        addTrailerMovie: (state, action) => {
            state.trailerMovie = action.payload
        }
    }
});

export const { addNowPlaying, addTrailerMovie } = movieSlice.actions;
export default movieSlice.reducer;