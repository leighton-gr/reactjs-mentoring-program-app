import React, { useContext, useEffect, useState } from 'react';
import { ResultFilter } from '../ResultFilter';
import { ResultSort } from '../ResultSort';
import { ResultCount } from '../ResultCount';
import { MovieContext } from '../../providers/MovieProvider';
import { Movie } from '../../types/types';

export const MovieSection = () => {
    const [sortBy, setSortBy] = useState<string>('releaseDate');
    const [movies, setMoviesData] = useState<Movie[]>([]);
    const [movieContext] = useContext(MovieContext);
    const movieData = movieContext.map((movies: Movie[]) => movies);

    useEffect(() => {
        // Todo add multiple sortBy options
        const moviesByReleaseDate = movieData.sort((a: { releaseDate: string; }, b: { releaseDate: string; }) =>
            (a.releaseDate > b.releaseDate) ? 1 : -1);

       setMoviesData(moviesByReleaseDate);
    }, [movieContext]);

    return (
        <>
            <ResultSort setSortBy={setSortBy}/>
            <ResultCount count={movieData.length}/>
            <ResultFilter movieData={movies}/>
        </>
    )
}