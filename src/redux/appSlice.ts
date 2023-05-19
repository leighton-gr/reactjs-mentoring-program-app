import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store';
import { Movie } from '../types/types';
import { dropdownData } from '../components/ResultSort/ResultSort';

export interface AppState {
    showSearch: boolean
    movie: Movie;
    sortBy: string;
}

const initialState: AppState = {
    showSearch: true,
    movie: null,
    sortBy: dropdownData.options[0].value,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        shouldShowSearch: (state) => {
            state.showSearch = !state.showSearch
        },
        selectedMovie: (state, action) => {
            state.movie = action.payload
        },
        sortBy: (state, action) => {
            state.sortBy = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { shouldShowSearch, selectedMovie, sortBy } = appSlice.actions

// Creates & exports selector
export const selectShowSearch = (state: RootState) => state.appReducer.showSearch
export const selectMovie = (state: RootState) => state.appReducer.movie
export const selectSortBy = (state: RootState) => state.appReducer.sortBy

export default appSlice.reducer