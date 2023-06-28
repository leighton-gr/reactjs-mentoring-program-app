import React, { useState } from 'react';
import { Button, Input } from '@chakra-ui/react';
import { filteredMovies } from '../../redux/appSlice';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {
    useLazyGetMoviesBySearchTermQuery
} from '../../redux/api';

const buttonColorScheme = 'red';

export const SearchBar = () => {
    const dispatch = useDispatch();
    const formTypeId = 'search';
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentValue, setCurrentValue] = useState<string>();
    const { search } = useParams();
    const [trigger] = useLazyGetMoviesBySearchTermQuery();

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCurrentValue(e.target.value);
    }

    const onSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const searchParam = searchParams.get('search');
        const { data } = await trigger({ search: searchParam || currentValue }).unwrap();

        navigate(`/search/${currentValue}`);

        dispatch(filteredMovies(data))
    }

    return (
        <>
            <form id={formTypeId} onSubmit={onSubmit}>
                <Input onChange={handleChange}
                       defaultValue={search}
                       placeholder="What do you want to watch?"
                       type="search"
                       name="search"/>
            </form>
            <Button form={formTypeId} colorScheme={buttonColorScheme} type="submit">Search</Button>
        </>
    )
}