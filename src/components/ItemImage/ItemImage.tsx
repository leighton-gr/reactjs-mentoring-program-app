import React, { useState } from 'react';
import './ItemImage.module.scss';

type Props = {
    imageUrl?: string;
    imageId?: number;
    showExtendedMovieDetails?: () => void;
}

export const ItemImage = ({ imageUrl, showExtendedMovieDetails }: Props) => {
    return (
        <div onClick={showExtendedMovieDetails}>
            <img className="item__image" src={imageUrl}
                 alt={'alt'}>
            </img>
        </div>
    )
};