import React from 'react';
import { Button, Input } from '@chakra-ui/react';
import { filteredMovies } from '../../redux/appSlice';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import {
    useLazyGetMoviesBySearchTermQuery
} from '../../redux/api';

const buttonColorScheme = 'red';

export const SearchBar = () => {
    const dispatch = useDispatch();
    const formTypeId = 'search';
    const [searchParams, setSearchParams] = useSearchParams();
    const { search } = useParams();
    const [trigger] = useLazyGetMoviesBySearchTermQuery();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchParams(`?${new URLSearchParams({ search: `${e.target.value}` })}`);
    }

    const onSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const search = searchParams.get('search');
        const { data } = await trigger({ search: search }).unwrap();

        dispatch(filteredMovies(data))
    }

    return (
        <>
            <form id={formTypeId} onSubmit={onSubmit}>
                <Input onChange={handleChange}
                       value={search || ''}
                       placeholder="What do you want to watch?"
                       type="search"
                       name="search"/>
            </form>
            <Button form={formTypeId} colorScheme={buttonColorScheme} type="submit">Search</Button>
        </>
    )
}