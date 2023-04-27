import React, { useContext, useEffect, useState } from 'react';
import { HeaderBanner } from './components/HeaderBanner';

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { MovieSection } from './components/MovieSection/MovieSection';

import './styles.scss';

import ErrorBoundary from './ErrorBoundary';
import { ErrorBoundaryFallback } from './components/ErrorBoundaryFallback';
import { MovieProvider } from './providers/MovieProvider';

import { MovieContext } from './providers/MovieProvider';
import { Movie } from './types/types';
import { getAllMovies } from './api/movies';

// sets default styles
const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: '#555555',
            },
        },
    },
})

export const App = () => {
    //     set search query to empty string
    const [q, setQ] = useState('');
    //     set search parameters
    //     we only what to search countries by title
    //     this list can be longer if you want
    //     you can search countries even by their population
    // just add it to this array
    const [searchParam] = useState(['title']);

    return (
        <ChakraProvider theme={theme}>
                <div className="application__body">
                    <HeaderBanner/>
                    <ErrorBoundary>
                        <MovieProvider>
                            <MovieSection/>
                        </MovieProvider>
                    </ErrorBoundary>
                </div>
        </ChakraProvider>
    )
}
export default App;