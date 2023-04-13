import React from 'react';
import { ResultFilter } from "../ResultFilter";
import { ResultSort } from "../ResultSort";
import { ResultCount } from "../ResultCount";

// Todo make props
export const COUNT = 39;

export const MovieSection = () => {
    return (
        <>
            <ResultFilter/>
            <ResultSort/>
            <ResultCount count={COUNT}/>
        </>
    )
}