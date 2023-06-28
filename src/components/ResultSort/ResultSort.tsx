import React, { useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import { filteredMovies, sortBy } from '../../redux/appSlice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useLazyGetMoviesBySortOrderQuery } from '../../redux/api';

export const dropdownData = {
    options: [
        {
            label: 'Popularity',
            value: 'vote_average',
        },
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
    const [searchParams, setSearchParams] = useSearchParams();
    const [trigger] = useLazyGetMoviesBySortOrderQuery();

    const handleCallback = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { data } = await trigger({ search: searchParams.get('search') || '', sortBy: e.target.value, sortOrder: SORT_TYPES.DESC }).unwrap();
        setSearchParams(`?search=${searchParams.get('search')}&filter=${searchParams.get('filter')}&sortBy=${e.target.value}`);
        dispatch(filteredMovies(data));
        dispatch(sortBy(e.target.value));
    }

    useEffect(() => {
        if (searchParams.get('sortBy') === null) {
            dispatch(sortBy(searchParams.get('sortBy')));
        }
    }, [searchParams]);

    return (
        <>
            <span>Sort By</span>
            <Select defaultValue={searchParams.get('sortBy')} onChange={handleCallback}>
                {dropdownData.options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </Select>
        </>
    )
}