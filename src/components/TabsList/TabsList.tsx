import React from 'react';
import { Tab, TabList } from '@chakra-ui/react';
import { filteredMovies } from '../../redux/appSlice';
import { useDispatch } from 'react-redux';
import { useLazyGetMoviesByGenreQuery } from '../../redux/api';
import { useSearchParams } from 'react-router-dom';

export const tabData = {
    genres: [
        {
            label: 'All',
            value: '',
        },
        {
            label: 'Comedy',
            value: 'comedy',
        },
        {
            label: 'Action',
            value: 'action',
        },
        {
            label: 'Fantasy',
            value: 'fantasy',
        },
    ],
};

export const TabsList = () => {
    const dispatch = useDispatch();
    const [trigger] = useLazyGetMoviesByGenreQuery();
    const [searchParams, setSearchParams] = useSearchParams();

    const setFilteredMovies = async (filter: string) => {
        try {
            const { data } = await trigger({ search: searchParams.get('search'), filter: filter }).unwrap();
            setSearchParams(`?search=${searchParams.get('search')}&filter=${filter}`);
            dispatch(filteredMovies(data));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TabList>
            {tabData.genres.map(genre =>
                <Tab onClick={() => setFilteredMovies(genre.value)} key={genre.value}>{genre.label}</Tab>
            )}
        </TabList>
    )
}