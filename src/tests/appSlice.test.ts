import reducer, {
    shouldShowSearch,
    selectedMovie,
    AppState,
    sortBy,
    filteredMovies,
    searchTerm
} from '../redux/appSlice';
import { dropdownData } from '../components/ResultSort/ResultSort';
import { Movie } from '../types/types';
import { expect } from '@jest/globals';

const mockMovie = <Movie>{
    id: '',
    title: '',
    release_date: '',
    poster_path: '',
    overview: '',
    genres: ['action', 'thriller'],
    budget: 0,
    revenue: 0,
    runtime: 0,
    tagline: '',
    vote_average: 0,
    vote_count: 0,
}

fdescribe('Given the app reducer ', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, { type: undefined })).toEqual({
            showSearch: true,
            movie: null,
            sortBy: dropdownData.options[0].value,
            filteredMovies: [],
            searchTerm: ''
        })
    })

    it('should handle showing the search bar', () => {
        const previousState: AppState = {
            showSearch: true,
            movie: mockMovie,
            sortBy: '',
            filteredMovies: [],
            searchTerm: '',
        };

        expect(reducer(previousState, shouldShowSearch(false))).toEqual(
            {
                showSearch: false,
                movie: mockMovie,
                sortBy: '',
                filteredMovies: [],
                searchTerm: '',
            }
        )
    });

    it('should handle setting the selected movie', () => {
        const previousState: AppState = {
            showSearch: true,
            movie: null,
            sortBy: '',
            filteredMovies: [],
            searchTerm: '',
        };

        expect(reducer(previousState, selectedMovie(mockMovie))).toEqual(
            {
                showSearch: true,
                movie: mockMovie,
                sortBy: '',
                filteredMovies: [],
                searchTerm: '',
            }
        )
    });

    it('should handle setting the sortBy value', () => {
        const previousState: AppState = {
            showSearch: true,
            movie: null,
            sortBy: '',
            filteredMovies: [],
            searchTerm: '',
        };

        expect(reducer(previousState, sortBy('title'))).toEqual(
            {
                showSearch: true,
                movie: null,
                sortBy: 'title',
                filteredMovies: [],
                searchTerm: '',
            }
        )
    });

    it('should handle setting the filteredMovies', () => {
        const previousState: AppState = {
            showSearch: true,
            movie: null,
            sortBy: '',
            filteredMovies: [],
            searchTerm: '',
        };

        expect(reducer(previousState, filteredMovies([mockMovie]))).toEqual(
            {
                showSearch: true,
                movie: null,
                sortBy: '',
                filteredMovies: [mockMovie],
                searchTerm: '',
            }
        )
    });

    it('should handle setting the search term', () => {
        const previousState: AppState = {
            showSearch: true,
            movie: null,
            sortBy: '',
            filteredMovies: [],
            searchTerm: '',
        };

        expect(reducer(previousState, searchTerm('?somesearchterm'))).toEqual(
            {
                showSearch: true,
                movie: null,
                sortBy: '',
                filteredMovies: [],
                searchTerm: '?somesearchterm',
            }
        )
    });
})