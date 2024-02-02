import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url: {},
    genres: {}
}

export const homeSlice = createSlice({
    name: 'home', // This name indicate which reducer you use 
    initialState,
    reducers: {

        getApiConfig: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },

    }
})

export const { getApiConfig, getGenres } = homeSlice.actions;
export default homeSlice.reducer