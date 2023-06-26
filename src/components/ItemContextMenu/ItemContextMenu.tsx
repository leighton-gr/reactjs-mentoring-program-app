import React, { useContext } from 'react';
import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure
} from '@chakra-ui/react';
import { EditModal } from '../ModalTemplate/EditModal';
import { DeleteModal } from '../ModalTemplate/DeleteModal';
import { Movie } from '../../types/types';

type Props = {
    movie?: Movie;
}

export const ItemContextMenu = ({ movie }: Props) => {
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();

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
            <EditModal isEditOpen={isEditOpen} onEditClose={onEditClose} movie={movie} />
            <DeleteModal isDeleteOpen={isDeleteOpen} onDeleteClose={onDeleteClose} movie={movie}/>
        </>
    )
}