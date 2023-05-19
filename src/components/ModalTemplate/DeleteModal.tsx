import React from 'react';
import { ModalTemplate } from './ModalTemplate';
import { Movie } from '../../types/types';
import { useDeleteMovieMutation, useUpdateMovieMutation } from '../../redux/api';

type Props = {
    isDeleteOpen: boolean;
    onDeleteClose: () => void;
    movieToDelete?: Movie;
}

export const DeleteModal = ({ isDeleteOpen, onDeleteClose, movieToDelete }: Props) => {
    const [deleteMovie] = useDeleteMovieMutation();

    const deleteMovieOnClose = async () => {
        onDeleteClose();
        await deleteMovie(movieToDelete).catch(console.error);
    }

    return (
        <ModalTemplate isOpen={isDeleteOpen} onClose={deleteMovieOnClose} title={'Delete Movie'}>
            <p>Are you sure you want to delete this movie?</p>
        </ModalTemplate>
    )
}