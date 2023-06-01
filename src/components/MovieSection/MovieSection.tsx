import React from 'react';
import { ResultSort } from '../ResultSort';

import { useGetMoviesBySortOrderQuery } from '../../redux/api';
import { ResultFilter } from '../ResultFilter';
import { useTypedSelector } from '../../redux/store';
import { selectSortBy } from '../../redux/appSlice';
import { ResultCount } from '../ResultCount';

export const MovieSection = () => {
    const sortBy = useTypedSelector(selectSortBy);
    const { data: movieData, isLoading } = useGetMoviesBySortOrderQuery({ sortBy: sortBy, sortOrder: 'desc' });

    return (
        <>
            <ResultSort/>
            {!isLoading && movieData.data ? (
                <>
                    <ResultCount count={movieData?.data.length}/>
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/* @ts-ignore */}
                    <ResultFilter movieData={movieData?.data}/>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </>
    )
}