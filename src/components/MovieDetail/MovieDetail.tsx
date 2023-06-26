import React from 'react';
import PropTypes from 'prop-types';

export type Props = {
    title: string;
    genres: string[];
    releaseDate: string;
}

export const MovieDetail = ({ title, genres, releaseDate }: Props) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{genres}</p>
            <p>{releaseDate}</p>
        </>
    )
}

MovieDetail.propTypes = {
    title: PropTypes.string,
    genre: PropTypes.array,
    releaseDate: PropTypes.string,
}