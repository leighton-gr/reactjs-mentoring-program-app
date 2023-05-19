import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
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
        getMoviesBySortOrder: builder.query<MovieResponse[], GetMoviesArgs>({
            query: (args) => {
                const { sortBy, sortOrder } = args;

                return { url: `movies?sortBy=${sortBy}&sortOrder=${sortOrder}` }
            },
            providesTags: ['Movie']
        }),
        addMovie: builder.mutation<Movie, Partial<Movie>>({
            query: (movie) => ({ url: 'movies', method: 'POST', body: movie }),
            invalidatesTags: ['Movie']
        }),
        updateMovie: builder.mutation<Movie, Partial<Movie>>({
            query: (movie) => ({ url: 'movies', method: 'PUT', body: movie })
        }),
        deleteMovie: builder.mutation<Movie, Movie>({
            query: (movie) => ({ url: 'movies', method: 'DELETE', body: movie })
        }),
    })
})

export const {
    useGetMoviesBySortOrderQuery,
    useAddMovieMutation,
    useUpdateMovieMutation,
    useDeleteMovieMutation
} = moviesApi;