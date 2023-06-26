import React from 'react';
import './ItemImage.module.scss';
import { useDispatch } from 'react-redux';
import { selectedMovie, shouldShowSearch } from '../../redux/appSlice';
import { Movie } from '../../types/types';

type Props = {
    imageUrl?: string;
    movie?: Movie;
}

export const ItemImage = ({ imageUrl, movie }: Props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(shouldShowSearch());
        dispatch(selectedMovie(movie))
    };

    return (
        <div onClick={handleClick}>
            <img className="item__image" src={imageUrl}
                 alt={'alt'}>
            </img>
        </div>
    )
};