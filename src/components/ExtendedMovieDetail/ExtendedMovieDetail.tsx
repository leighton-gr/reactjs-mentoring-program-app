import React, { useEffect } from 'react';
import { selectedMovie, selectMovie, shouldShowSearch } from '../../redux/appSlice';
import { useTypedSelector } from '../../redux/store';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useGetMoviesQuery } from '../../redux/api';

type Props = {
    currentMovie: string;
}

export const ExtendedMovieDetail = ({ currentMovie }: Props) => {
    const dispatch = useDispatch();
    const movie = useTypedSelector(selectMovie);
    const { data, isLoading } = useGetMoviesQuery();

    const handleClick = () => {
        dispatch(shouldShowSearch(true));
    };

    useEffect(() => {
        if (!movie && data) {
            const movieToShow = data.data.find((movie) => movie.id.toString() === currentMovie);

            dispatch(selectedMovie(movieToShow))
        }
    }, [movie, data])


    return (
        <>
            {!isLoading && movie &&
                <div>
                    <Button onClick={handleClick}>Back to search</Button>
                    <img className="item__image" src={movie?.poster_path} alt={'alt'}/>
                    <h1>{movie?.title}</h1>
                    <p>{movie?.release_date}</p>
                    <p>{movie?.overview}</p>
                </div>
            }

            {!movie && !isLoading &&
                <div>Movie Not Found</div>
            }
        </>
    )
}