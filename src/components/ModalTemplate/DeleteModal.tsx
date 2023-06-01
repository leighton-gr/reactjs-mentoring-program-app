import React from 'react';
import { ModalTemplate } from './ModalTemplate';
import { Movie } from '../../types/types';
import { useDeleteMovieMutation } from '../../redux/api';

type Props = {
    isDeleteOpen: boolean;
    onDeleteClose: () => void;
    movie?: Movie;
}

export const DeleteModal = ({ isDeleteOpen, onDeleteClose, movie }: Props) => {
    const [deleteMovie] = useDeleteMovieMutation();

    const deleteMovieOnClose = async () => {
        onDeleteClose();
        await deleteMovie(movie.id).catch(console.error);
    }

    return (
        <ModalTemplate isOpen={isDeleteOpen} onClose={deleteMovieOnClose} title={'Delete Movie'}>
            <p>Are you sure you want to delete this movie?</p>
        </ModalTemplate>
    )
}