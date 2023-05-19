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
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { useGetMoviesQuery } from './redux/api';

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
    return (
        <ChakraProvider theme={theme}>
            <div className="application__body">
                <ErrorBoundary>
                    <HeaderBanner/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <MovieSection />
                </ErrorBoundary>
            </div>
        </ChakraProvider>
)
}
export default App;