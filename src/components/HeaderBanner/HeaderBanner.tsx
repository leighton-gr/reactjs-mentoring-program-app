import React, { useEffect, useId } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    useDisclosure
} from '@chakra-ui/react';
import { ModalTemplate } from '../ModalTemplate';
import { useFormik } from 'formik';
import { SearchBar } from '../SearchBar';
import { ExtendedMovieDetail } from '../ExtendedMovieDetail/ExtendedMovieDetail';
import { useAddMovieMutation } from '../../redux/api';
import { selectShowSearch, shouldShowSearch } from '../../redux/appSlice';
import { useTypedSelector } from '../../redux/store';

import { v4 as uuidv4 } from 'uuid';
import { MultiSelect, useMultiSelect } from 'chakra-multiselect';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const buttonColorScheme = 'red';

export const HeaderBanner = () => {
    const showSearchBar = useTypedSelector(selectShowSearch);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ addMovie ] = useAddMovieMutation();
    const formTypeId = useId();
    const [searchParams] = useSearchParams();
    const movieId = searchParams.get('movie');
    const dispatch = useDispatch();

    useEffect(() => {
        if (movieId) {
            dispatch(shouldShowSearch(false))
        }
    }, [movieId])

    const formik = useFormik({
        initialValues: {
            title: '',
            release_date: '',
            poster_path: '',
            overview: '',
            genres: ['action'],
            runtime: 0
        },
        onSubmit: async (values) => {
            await addMovie(values);
        },
    })

    const { value, options, onChange } = useMultiSelect({
        value: '',
        options: []
    })

    return (
        <>
            <Heading>Find Your Movie</Heading>
            <Button colorScheme={buttonColorScheme} variant="outline" onClick={onOpen}>Add Movie</Button>
            {/* Todo move modals to own components */}
            <ModalTemplate title={'Add Movie'} isOpen={isOpen} onClose={onClose} formTypeId={formTypeId}>
                <form id={formTypeId} onSubmit={formik.handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder="Title" id='title' type='text' onChange={formik.handleChange} value={formik.values.title}/>
                        <FormLabel>Release Date</FormLabel>
                        <Input placeholder="Select Date" id='release_date' type="date" onChange={formik.handleChange} value={formik.values.release_date}/>
                        <FormLabel>Poster Path</FormLabel>
                        <Input placeholder="Poster Path" id='poster_path' type="url" onChange={formik.handleChange} value={formik.values.poster_path}/>
                        <FormLabel>Overview</FormLabel>
                        <Input placeholder="Overview" id='overview' type="text" onChange={formik.handleChange} value={formik.values.overview}/>
                        <FormLabel>Runtime</FormLabel>
                        <Input placeholder="Runtime" id='runtime' type="number" onChange={formik.handleChange} value={formik.values.runtime}/>
                        {/*<FormLabel>Genre</FormLabel>*/}
                        {/*<MultiSelect options={options} value={formik.handleChange} label='Choose Genres' onChange={formik.handleChange} />*/}
                    </FormControl>
                </form>
            </ModalTemplate>
            {showSearchBar ? (
                <SearchBar />
            ) : <ExtendedMovieDetail currentMovie={movieId} /> }
        </>
    )
}