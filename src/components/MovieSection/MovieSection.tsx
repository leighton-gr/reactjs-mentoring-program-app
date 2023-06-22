import React, { useEffect, useState } from 'react';
import { ResultSort } from '../ResultSort';

import { ResultFilter } from '../ResultFilter';
import { useTypedSelector } from '../../redux/store';
import { selectFilteredMovies } from '../../redux/appSlice';
import { ResultCount } from '../ResultCount';
import { Movie } from '../../types/types';
import { Flex } from '@chakra-ui/react';

export const MovieSection = () => {
    const [data, setData] = useState<Movie[]>();
    const initialFilteredMoviesResponse = useTypedSelector(selectFilteredMovies);

    // before, result sort would dispatch an action with the relevant sort query key, then
    // wherever the data is needed (result filter, would make a request to the API with the relevant query key

    useEffect(() => {
        setData(initialFilteredMoviesResponse);
    }, [initialFilteredMoviesResponse])

    return (
        <Flex flexDirection='column'>
            <ResultSort/>
            {data ? (
                <>
                    <ResultCount count={data?.length}/>
                    <ResultFilter movieData={data}/>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </Flex>
    )
}