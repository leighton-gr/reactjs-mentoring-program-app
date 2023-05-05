import React, { useContext, useEffect, useState } from 'react';
import { ItemImage } from '../ItemImage/ItemImage';
import { MovieContext } from '../../providers/MovieProvider';
import { Movie } from '../../types/types';

export type Props = {
    movie: Movie;
}

export const ExtendedMovieDetail = ({ movie }: Props) => {
    return (
        <div>
            <ItemImage/>
            <h1>Test</h1>
        </div>
    )
}