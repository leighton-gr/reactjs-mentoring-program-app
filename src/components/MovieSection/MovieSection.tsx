import React, { useContext } from 'react';
import { ResultFilter } from "../ResultFilter";
import { ResultSort } from "../ResultSort";
import { ResultCount } from "../ResultCount";
import { MovieContext } from '../../providers/MovieProvider';
import { Movie } from '../../types/types';

export const MovieSection = () => {
    const [movieContext] = useContext(MovieContext);
    const movieData = movieContext.map((movies: Movie[]) => movies);

    return (
        <>
            <ResultFilter movieData={movieData}/>
            <ResultSort/>
            <ResultCount count={movieData.length}/>
        </>
    )
}