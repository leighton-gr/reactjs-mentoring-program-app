import React from "react";
import { SearchBar } from "../SearchBar";
import {
    Button,
    FormControl,
    FormLabel, Heading,
    Input, Select,
    useDisclosure
} from "@chakra-ui/react";
import { ModalTemplate } from "../ModalTemplate";

const buttonColorScheme = 'red';

export const HeaderBanner = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Heading>Find Your Movie</Heading>
            <Button colorScheme={buttonColorScheme} variant='outline' onClick={onOpen}>Add Movie</Button>
            {/* Todo move modals to own components */}
            <ModalTemplate title={'Add Movie'} isOpen={isOpen} onClose={onClose}>
                <FormControl isRequired>
                    <FormLabel>First name</FormLabel>
                    <Input placeholder='Title' />
                    <FormLabel>Release Date</FormLabel>
                    <Input placeholder='Select Date' type='date' />
                    <FormLabel>Movie Url</FormLabel>
                    <Input placeholder='https://' />
                    <FormLabel>Rating</FormLabel>
                    <Input placeholder='7.8' type='number' />
                    <FormLabel>Country</FormLabel>
                    <Select placeholder='Select Genre'>
                        <option>Sci-Fi</option>
                        <option>Fantasy</option>
                        <option>Comedy</option>
                    </Select>
                    <FormLabel>Runtime</FormLabel>
                    <Input placeholder='minutes' type='number' />
                    <FormLabel>Overview</FormLabel>
                    <Input placeholder='Movie description'  />
                </FormControl>
            </ModalTemplate>
            <SearchBar />
            <Button colorScheme={buttonColorScheme}>Search</Button>
        </>
    )
}