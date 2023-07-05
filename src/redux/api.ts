import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie, MovieResponse } from '../types/types';

type GetMoviesArgs = {
    sortBy?: string,
    sortOrder?: string
    searchBy?: string
    search?: string
    filter?: string
    offset?: string
    limit?: string
}

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
    tagTypes: ['Movie'],
    endpoints: (builder) => ({
        getMovies: builder.query<MovieResponse, void>({
            query: () => 'movies?limit=100',
            providesTags: ['Movie']
        }),
        getMoviesBySearchTerm: builder.query<MovieResponse, GetMoviesArgs>({
            query: (args) => {
                const { search, sortBy , filter, sortOrder } = args

                console.log(search);

                return { url: `movies?search=${search || ''}&searchBy=title&filter=${filter || ''}&sortBy=${sortBy || ''}&sortOrder=${sortOrder || ''}` }
            },
            providesTags: ['Movie']
        }),
        getMoviesBySortOrder: builder.query<MovieResponse, GetMoviesArgs>({
            query: (args) => {
                const { search, sortBy, sortOrder } = args;

                return { url: `movies?search=${search}&sortBy=${sortBy}&searchBy=title&sortOrder=${sortOrder}` }
            },
            providesTags: ['Movie']
        }),
        getMoviesByGenre: builder.query<MovieResponse, GetMoviesArgs>({
            query: (args) => {
                const { search, filter } = args

                return { url: `movies?search=${search}&searchBy=title&filter=${filter}` }
            },
            providesTags: ['Movie']
        }),
        addMovie: builder.mutation<Movie, Partial<Movie>>({
            query: (movie) => ({ url: 'movies', method: 'POST', body: movie }),
            invalidatesTags: ['Movie']
        }),
        updateMovie: builder.mutation<Movie, Partial<Movie>>({
            query: (movie) => ({ url: 'movies', method: 'PUT', body: movie }),
            invalidatesTags: ['Movie']
        }),
        deleteMovie: builder.mutation<{ success: boolean; id: string }, string>({
            query: (id) => ({ url: `movies/${id}`, method: 'DELETE', body: id }),
            invalidatesTags: ['Movie']
        }),
    })
})

export const {
    useGetMoviesQuery,
    useGetMoviesBySortOrderQuery,
    useLazyGetMoviesBySortOrderQuery,
    useGetMoviesBySearchTermQuery,
    useLazyGetMoviesBySearchTermQuery,
    useLazyGetMoviesByGenreQuery,
    useAddMovieMutation,
    useUpdateMovieMutation,
    useDeleteMovieMutation
} = moviesApi;