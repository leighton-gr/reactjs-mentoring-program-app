import React, { useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import { sortBy } from '../../redux/appSlice';
import { useDispatch } from 'react-redux';

export const dropdownData = {
    options: [
        {
            label: 'Release Date',
            value: 'release_date',
        },
        {
            label: 'Title',
            value: 'title',
        },
        {
            label: 'Genre',
            value: 'genre',
        },
    ],
};

const SORT_TYPES = {
    DESC: 'desc',
    ASC: 'asc',
}

export const ResultSort = () => {
    const dispatch = useDispatch();

    const handleCallback = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('sort');
        dispatch(sortBy(e.target.value));
    }

    useEffect(() => {
        dispatch(sortBy(dropdownData.options[0].value));
    }, []);

    return (
        <>
            <span>Sort By</span>
            <Select onChange={handleCallback}>
                {dropdownData.options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </Select>
        </>
    )
}