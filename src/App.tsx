import React, { useContext, useEffect, useState } from 'react';
import { HeaderBanner } from './components/HeaderBanner';

import { Button, ChakraProvider, extendTheme, Input } from '@chakra-ui/react'
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

const buttonColorScheme = 'red';

export const App = () => {
    const [movies, setMovies] = useState([])
    //     set search query to empty string
    const [query, setQuery] = useState('');
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
                    <Input placeholder="What do you want to watch?"
                           value={query}
                           onChange={(e) => setQuery(e.target.value)}
                           type="search"
                           name="search"/>
                    <Button colorScheme={buttonColorScheme}>Search</Button>
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