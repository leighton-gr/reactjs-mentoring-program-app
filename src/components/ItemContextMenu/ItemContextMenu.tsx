import React from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Select,
    useDisclosure
} from "@chakra-ui/react";
import { ModalTemplate } from "../ModalTemplate";

export const ItemContextMenu = () => {
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
    const { isOpen: isDeleteOpen , onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();

    // use context api to get current movie details?

    return (
        <>
            <Menu>
                <MenuButton as={Button}>
                    ...
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={onEditOpen}>Edit</MenuItem>
                    <MenuItem onClick={onDeleteOpen}>Delete</MenuItem>
                </MenuList>
            </Menu>
            {/* Todo move modals to own components */}
            <ModalTemplate isOpen={isEditOpen} onClose={onEditClose} title={'Edit Movie'}>
                {/*Todo trigger completion modal*/}
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
                    <Input placeholder='Movie description' />
                </FormControl>
            </ModalTemplate>
            <ModalTemplate isOpen={isDeleteOpen} onClose={onDeleteClose} title={'Delete Movie'} isSubmitButtonVisible={false}>
                <p>Are you sure you want to delete this movie?</p>
            </ModalTemplate>
        </>
    )
}