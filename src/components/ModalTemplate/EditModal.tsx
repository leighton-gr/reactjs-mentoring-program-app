import { ModalTemplate } from './ModalTemplate';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
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
    const [ updateMovie ] = useUpdateMovieMutation();
    const formTypeId = useId();

    const formik = useFormik({
        initialValues: {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            overview: movie.overview,
            genres: movie.genres,
            budget: movie.budget,
            revenue: movie.revenue,
            runtime: movie.runtime || 0,
            tagline: movie.tagline || 'default',
            vote_average: movie.vote_average,
            vote_count: movie.vote_count,
        },
        onSubmit: async (values) => {
            console.log('onSubmit');
            await updateMovie(values);
        },
        validateOnChange: true,
        enableReinitialize: true,
        isInitialValid: (v: boolean) => {
            console.log(v);
            return v;
        }
    })

    return (
        <ModalTemplate isOpen={isEditOpen} onClose={onEditClose} title={'Edit Movie'} formTypeId={formTypeId}>
            {/*Todo trigger completion modal*/}
            <form id={formTypeId} onSubmit={formik.handleSubmit}>
                <FormControl isRequired>
                    <FormLabel>First name</FormLabel>
                    <Input placeholder="Title" id='title' type='text' onChange={formik.handleChange} value={formik.values.title}/>
                    <FormLabel>Release Date</FormLabel>
                    <Input placeholder="Select Date" id='release_date' type="date" onChange={formik.handleChange} value={formik.values.release_date}/>
                    <FormLabel>Poster Path</FormLabel>
                    <Input placeholder="Poster Path" id='poster_path' type="url" onChange={formik.handleChange} value={formik.values.poster_path}/>
                    <FormLabel>Overview</FormLabel>
                    <Input placeholder="Overview" id='overview' type="text" onChange={formik.handleChange} value={formik.values.overview}/>
                    <FormLabel>Runtime</FormLabel>
                    <Input placeholder="Runtime" id='runtime' type="number" onChange={formik.handleChange} value={formik.values.runtime}/>
                </FormControl>
            </form>
        </ModalTemplate>
    )
}