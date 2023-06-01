import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store';
import { Movie, MovieResponse } from '../types/types';
import { dropdownData } from '../components/ResultSort/ResultSort';

export interface AppState {
    showSearch: boolean
    movie: Movie;
    sortBy: string;
    filteredMovies: MovieResponse[]
}

const initialState: AppState = {
    showSearch: true,
    movie: null,
    sortBy: dropdownData.options[0].value,
    filteredMovies: [{
        data: [{
            "id": 269149,
            "title": "Zootopia",
            "tagline": "Welcome to the urban jungle.",
            "vote_average": 7.7,
            "vote_count": 6795,
            "release_date": "2016-02-11",
            "poster_path": "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
            "overview": "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
            "budget": 150000000,
            "revenue": 1023784195,
            "genres": [
                "Animation",
                "Adventure",
                "Family",
                "Comedy"
            ],
            "runtime": 108
        }]
    }]
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
        filteredMovies: (state, { payload }) => {
            state.filteredMovies = payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { shouldShowSearch, selectedMovie, sortBy, filteredMovies } = appSlice.actions

// Creates & exports selector
export const selectShowSearch = (state: RootState) => state.appReducer.showSearch
export const selectMovie = (state: RootState) => state.appReducer.movie
export const selectSortBy = (state: RootState) => state.appReducer.sortBy
export const selectFilteredMovies = (state: RootState) => state.appReducer.filteredMovies

export default appSlice.reducer