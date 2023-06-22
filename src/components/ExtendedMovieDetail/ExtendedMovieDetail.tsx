import React from 'react';
import { selectedMovie, selectMovie, shouldShowSearch } from '../../redux/appSlice';
import { useTypedSelector } from '../../redux/store';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

export const ExtendedMovieDetail = () => {
    const dispatch = useDispatch();
    const movie = useTypedSelector(selectMovie);

    const handleClick = () => {
        dispatch(shouldShowSearch(true));
    };

    return (
        <div>
            <Button onClick={handleClick}>Back to search</Button>
            <img className="item__image" src={movie?.poster_path} alt={'alt'}/>
            <h1>{movie.title}</h1>
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
        </div>
    )
}