import React from 'react';

export type Props = {
    title: string;
    genre: string;
    releaseDate: string;
}

export const MovieDetail = ({ title, genre, releaseDate }: Props) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{genre}</p>
            <p>{releaseDate}</p>
        </>
    )
}