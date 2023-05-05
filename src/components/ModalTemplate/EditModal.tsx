import { ModalTemplate } from "./ModalTemplate";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import React from "react";
import { Movie } from '../../types/types';

type Props = {
    isEditOpen: boolean;
    onEditClose: () => void;
    data?: Movie;
}

export const EditModal = ({ isEditOpen, onEditClose, data }: Props) => {
    return (
        <ModalTemplate isOpen={isEditOpen} onClose={onEditClose} title={'Edit Movie'}>
            {/*Todo trigger completion modal*/}
            <FormControl isRequired>
                {/*<FormLabel>First name</FormLabel>*/}
                {/*<Input placeholder='Title' defaultValue={''}/>*/}
                {/*<FormLabel>Release Date</FormLabel>*/}
                {/*<Input defaultValue={new Date(data.releaseDate).toISOString().slice(0, 10)} type='date'/>*/}
                {/*<FormLabel>Genre</FormLabel>*/}
                {/*<Select placeholder={data.genre || 'Sci-Fi'}>*/}
                {/*    <option>Sci-Fi</option>*/}
                {/*    <option>Fantasy</option>*/}
                {/*    <option>Comedy</option>*/}
                {/*</Select>*/}
            </FormControl>
        </ModalTemplate>
    )
}