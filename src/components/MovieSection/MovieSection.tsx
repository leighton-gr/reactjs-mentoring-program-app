import React, { useEffect, useState } from 'react';
import { ResultSort } from '../ResultSort';

import { useGetMoviesBySortOrderQuery } from '../../redux/api';
import { ResultCount } from '../ResultCount';
import { ResultFilter } from '../ResultFilter';
import { useTypedSelector } from '../../redux/store';
import { selectSortBy } from '../../redux/appSlice';

export const MovieSection = () => {
    const sortBy = useTypedSelector(selectSortBy);
    const { data: movieData, isLoading } = useGetMoviesBySortOrderQuery({ sortBy: sortBy, sortOrder: 'desc' });
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if(movieData) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore this property does exist on the object
            setMovies(movieData.data)
        }
    })

    // todo - could use loading spinner
    if (isLoading) {
        return <div>Loading!</div>
    }

    return (
        <>
            <ResultSort />
            {movies &&
                <>
                    <ResultCount count={movies.length}/>
                    <ResultFilter movieData={movies}/>
                </>
            }
        </>
    )
}