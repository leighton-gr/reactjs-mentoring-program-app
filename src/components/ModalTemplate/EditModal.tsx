import { ModalTemplate } from './ModalTemplate';
import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import React, { useId } from 'react';
import { Movie } from '../../types/types';
import { useFormik } from 'formik';
import { useUpdateMovieMutation } from '../../redux/api';

type Props = {
    isEditOpen: boolean;
    onEditClose: () => void;
    movie?: Movie;
}

export const EditModal = ({ isEditOpen, onEditClose, movie }: Props) => {
    const [updateMovie] = useUpdateMovieMutation();
    const formTypeId = useId();

    const formik = useFormik({
        initialValues: {
            id: movie.id,
            title: movie.title,
            release_date: movie.release_date,
            genres: movie.genres,
            poster_path: movie.poster_path,
            budget: movie.budget,
            revenue: movie.revenue,
            runtime: movie.runtime,
            tagline: movie.tagline,
            vote_average: movie.vote_average,
            vote_count: movie.vote_count,
        },
        onSubmit: async (values) => {
            await updateMovie(values);
        },
    })

    return (
        <ModalTemplate isOpen={isEditOpen} onClose={onEditClose} title={'Edit Movie'}>
            {/*Todo trigger completion modal*/}
            <form id={formTypeId} onSubmit={formik.handleSubmit}>
                <FormControl isRequired>
                    <FormLabel>Title</FormLabel>
                    <Input placeholder="Title"
                           onChange={formik.handleChange}
                           value={formik.values.title}/>
                    <FormLabel>Release Date</FormLabel>
                    <Input type="date"
                           onChange={formik.handleChange}
                           value={new Date(formik.values.release_date).toISOString().slice(0, 10)}/>
                    <FormLabel>Genre</FormLabel>
                    <Select placeholder={movie.genres[0]}
                            onChange={formik.handleChange}
                            value={formik.values.genres[0]}
                    >
                        {movie.genres.map((genre) => (
                            <option key={genre}>{genre}</option>
                        ))}
                    </Select>
                </FormControl>
            </form>
        </ModalTemplate>
    )
}