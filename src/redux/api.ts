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
        getMovies: builder.query<MovieResponse[], GetMoviesArgs>({
            query: () => 'movies',
            providesTags: ['Movie']
        }),
        getMoviesBySortOrder: builder.query<MovieResponse, GetMoviesArgs>({
            query: (args) => {
                const { sortBy, sortOrder } = args;

                return { url: `movies?sortBy=${sortBy}&sortOrder=${sortOrder}` }
            },
            providesTags: ['Movie']
        }),
        getMoviesByGenre: builder.query<MovieResponse, GetMoviesArgs>({
            query: (args) => {
                const { filter } = args;

                console.log(args);

                return { url: `movies?filter=${filter}` }
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
    useLazyGetMoviesByGenreQuery,
    useAddMovieMutation,
    useUpdateMovieMutation,
    useDeleteMovieMutation
} = moviesApi;