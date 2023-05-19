import React, { useId } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input, Select,
    useDisclosure
} from '@chakra-ui/react';
import { ModalTemplate } from '../ModalTemplate';
import { useFormik } from 'formik';
import { SearchBar } from '../SearchBar';
import { ExtendedMovieDetail } from '../ExtendedMovieDetail/ExtendedMovieDetail';
import { useAddMovieMutation } from '../../redux/api';
import { selectShowSearch } from '../../redux/appSlice';
import { useTypedSelector } from '../../redux/store';

const buttonColorScheme = 'red';

export const HeaderBanner = () => {
    const showSearchBar = useTypedSelector(selectShowSearch);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ addMovie ] = useAddMovieMutation();
    const formTypeId = useId();

    const formik = useFormik({
        initialValues: {
            id: Math.floor(Math.random() * (2000000 - 20 + 1)) + 20,
            title: '',
            releaseDate: '',
            genre: '',
            image: 'https://picsum.photos/300/400'
        },
        onSubmit: async (values) => {
            await addMovie(values);
        },
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
                        <Input placeholder="Select Date" id='releaseDate' type="date" onChange={formik.handleChange} value={formik.values.releaseDate}/>
                        <FormLabel>Country</FormLabel>
                        <Select placeholder="Select Genre" id='genre' onChange={formik.handleChange} value={formik.values.genre}>
                            <option>Sci-Fi</option>
                            <option>Fantasy</option>
                            <option>Comedy</option>
                        </Select>
                    </FormControl>
                </form>
            </ModalTemplate>
            {showSearchBar ? (
                <SearchBar />
            ) : <ExtendedMovieDetail /> }
        </>
    )
}