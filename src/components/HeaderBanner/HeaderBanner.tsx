import React, { useContext } from 'react';
import { SearchBar } from '../SearchBar';
import {
    Button,
    FormControl,
    FormLabel, Heading,
    Input, Select,
    useDisclosure
} from '@chakra-ui/react';
import { ModalTemplate } from '../ModalTemplate';
import { MovieContext } from '../../providers/MovieProvider';
import { Movie } from '../../types/types';
import { addMovie } from '../../api/movies';

const buttonColorScheme = 'red';

export const HeaderBanner = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleSubmit = async (movie: any) => {
        console.log('submitted');
        await addMovie(movie);
    };

    const handleButtonClicked = () =>  {
        const searchQuery = 'hello';

        window.location.href = "https://youtube.com/results?search_query" + searchQuery;
    }


    return (
        <>
            <Heading>Find Your Movie</Heading>
            <Button colorScheme={buttonColorScheme} variant="outline" onClick={onOpen}>Add Movie</Button>
            {/* Todo move modals to own components */}
            <ModalTemplate title={'Add Movie'} isOpen={isOpen} onClose={onClose}>
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder="Title"/>
                        <FormLabel>Release Date</FormLabel>
                        <Input placeholder="Select Date" type="date"/>
                        <FormLabel>Country</FormLabel>
                        <Select placeholder="Select Genre">
                            <option>Sci-Fi</option>
                            <option>Fantasy</option>
                            <option>Comedy</option>
                        </Select>
                    </FormControl>
                    <button onClick={handleButtonClicked.bind()}>hello</button>
                </form>
            </ModalTemplate>
            <SearchBar/>
            <Button colorScheme={buttonColorScheme}>Search</Button>
        </>
    )
}