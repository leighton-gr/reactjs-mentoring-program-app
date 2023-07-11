import React from 'react';
import './ItemImage.module.scss';
import { useDispatch } from 'react-redux';
import { selectedMovie, shouldShowSearch } from '../../redux/appSlice';
import { Movie } from '../../types/types';
import { useSearchParams } from 'react-router-dom';

type Props = {
    imageUrl?: string;
    movie?: Movie;
}

export const ItemImage = ({ imageUrl, movie }: Props) => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = () => {
        dispatch(shouldShowSearch(false));
        dispatch(selectedMovie(movie))
        setSearchParams(`movie=${movie.id}`);

    };

    return (
        <div onClick={handleClick}>
            <img className="item__image" src={imageUrl}
                 alt={'alt'}>
            </img>
        </div>
    )
};