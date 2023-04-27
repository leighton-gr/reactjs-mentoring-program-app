import React, { ReactNode, useEffect, useState } from 'react';

type Props = {
    children: ReactNode;
}

import { createContext } from 'react';
import { getAllMovies } from '../api/movies';

export const MovieContext = createContext([]);

export const MovieProvider = ({ children }: Props) => {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllMovies();
            setMovies(response.data);
        };

        fetchData()
            .catch(console.error);
    }, [])

    return (
        <MovieContext.Provider value={[ movies, setMovies ]}>
            {children}
        </MovieContext.Provider>
    );
};