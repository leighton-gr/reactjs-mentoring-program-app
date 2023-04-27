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
import { MovieContext } from '../../providers/MovieProvider';
import { Movie } from '../../types/types';
import { DeleteModal } from '../ModalTemplate/DeleteModal';

type Props = {
    id?: number;
}

export const ItemContextMenu = ({ id }: Props) => {
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();

    const [movieContext] = useContext(MovieContext);

    // currently passing through all ids, need to pass just one
    const movieData = movieContext.map((movies: Movie[]) => movies);
    // const thing = movieData.forEach((movie: Movie) => movie.id === movie.id);

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
            <EditModal isEditOpen={isEditOpen} onEditClose={onEditClose} />
            <DeleteModal isDeleteOpen={isDeleteOpen} onDeleteClose={onDeleteClose}/>
        </>
    )
}