import React from 'react';
import { Input } from '@chakra-ui/react';

export const SearchBar = () => {
    return (
        <Input placeholder='What do you want to watch?'
               type='search'
               name='search'/>
    )
}