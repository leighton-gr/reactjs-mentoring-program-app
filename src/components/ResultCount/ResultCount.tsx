import React from 'react';

export type Props = {
    count: number;
}

export const ResultCount = ({ count }: Props) => {
    return (
        <span>{count} movies found</span>
    )
};