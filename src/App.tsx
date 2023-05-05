import React, { useContext, useEffect, useState } from 'react';
import { HeaderBanner } from './components/HeaderBanner';

import { Button, ChakraProvider, extendTheme, Input } from '@chakra-ui/react'
import { MovieSection } from './components/MovieSection/MovieSection';

import './styles.scss';

import ErrorBoundary from './ErrorBoundary';
import { ErrorBoundaryFallback } from './components/ErrorBoundaryFallback';
import { MovieDetailsFlagContextProvider, MovieProvider } from './providers/MovieProvider';

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
    // todo search term
    return (
        <ChakraProvider theme={theme}>
            <MovieProvider>
                <div className="application__body">
                    <ErrorBoundary>
                        <HeaderBanner />
                    </ErrorBoundary>
                    <ErrorBoundary>
                            <MovieSection />
                    </ErrorBoundary>
                </div>
            </MovieProvider>
        </ChakraProvider>
    )
}
export default App;