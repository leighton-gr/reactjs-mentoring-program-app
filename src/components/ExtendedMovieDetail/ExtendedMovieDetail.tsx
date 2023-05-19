import React from 'react';
import { selectMovie } from '../../redux/appSlice';
import { useTypedSelector } from '../../redux/store';

export const ExtendedMovieDetail = () => {
    const movie = useTypedSelector(selectMovie);

    return (
        <div>
            <img className="item__image" src={movie?.poster_path} alt={'alt'}/>
            <h1>{movie.title}</h1>
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
        </div>
    )
}