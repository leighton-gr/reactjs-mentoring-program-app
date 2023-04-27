import React from 'react';
import {
    Button,
    FormControl,
    FormLabel, Heading,
    Input, Select,
    useDisclosure
} from '@chakra-ui/react';
import { ModalTemplate } from '../ModalTemplate';
import { addMovie } from '../../api/movies';
import { useFormik } from 'formik';

const buttonColorScheme = 'red';

export const HeaderBanner = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const formTypeId = 'addMovieForm';

    const formik = useFormik({
        initialValues: {
            id: Math.floor(Math.random() * (2000000 - 20 + 1)) + 20,
            title: '',
            releaseDate: '',
            genre: '',
            image: 'https://picsum.photos/300/400'
        },
        onSubmit: async (values) => {
            await addMovie(values).catch((error) => console.log(error));
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
        </>
    )
}