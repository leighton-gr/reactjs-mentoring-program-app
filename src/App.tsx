import React, { useEffect } from 'react';
import { HeaderBanner } from './components/HeaderBanner';

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { MovieSection } from './components/MovieSection/MovieSection';

import './styles.scss';

import ErrorBoundary from './ErrorBoundary';
import { useDispatch } from 'react-redux';
import { MultiSelectTheme } from 'chakra-multiselect'
import { useGetMoviesBySearchTermQuery } from './redux/api';
import { filteredMovies } from './redux/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';

// sets default styles
const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: '#555555',
            },
        },
    },
    components: {
        MultiSelect: MultiSelectTheme
    }
})

export const App = () => {
    const dispatch = useDispatch();
    const { search } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('filter');
    const sortBy = searchParams.get('sortBy');

    const { data: movieData } = useGetMoviesBySearchTermQuery({
        search: search || '',
        filter: filter || '',
        sortBy: sortBy || '',
        sortOrder: 'desc'
    });

    useEffect(() => {
        if (movieData) {
            dispatch(filteredMovies(movieData.data))
        }

        // sets vote average, AC says empty search param but this does not ge most popular

        // if (sortBy === null && filter === null && search === undefined) {
        //     setSearchParams('?sortBy=vote_average');
        // }

    }, [movieData])

    return (
        <ChakraProvider theme={theme}>
            <div className="application__body">
                <ErrorBoundary>
                    <HeaderBanner/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <MovieSection/>
                </ErrorBoundary>
            </div>
        </ChakraProvider>
    )
}
export default App;