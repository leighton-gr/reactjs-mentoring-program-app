import React, { ReactNode } from 'react';
import { HeaderBanner } from "./components/HeaderBanner";

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { MovieSection } from "./components/MovieSection/MovieSection";

import './styles.scss';

import { ErrorBoundary } from 'react-error-boundary';

import { ErrorBoundaryFallback } from './components/ErrorBoundaryFallback';

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
  return (
        <ChakraProvider theme={theme}>
            <div className='application__body'>
                <HeaderBanner/>
                <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
                    <MovieSection />
                </ErrorBoundary>
            </div>
        </ChakraProvider>
  )
}
export default App;