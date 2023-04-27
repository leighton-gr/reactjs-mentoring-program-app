import React from 'react';

type Props = {
    imageUrl?: string;
}

export const ItemImage = ({ imageUrl }: Props) => {
    return (
        <div>
            <img src={imageUrl}
                 alt={'alt'}>
            </img>
        </div>
    )
};