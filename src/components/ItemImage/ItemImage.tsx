import React from 'react';
import { ItemContextMenu } from "../ItemContextMenu/ItemContextMenu";

type Props = {
    imageUrl?: string;
}

export const ItemImage = ({ imageUrl }: Props) => {
    return (
        <div>
            <img src={imageUrl}
                 alt={'alt'}>
            </img>
            <ItemContextMenu/>
        </div>
    )
};