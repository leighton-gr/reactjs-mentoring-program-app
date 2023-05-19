import React from 'react';
import { Button, Input } from '@chakra-ui/react';

const buttonColorScheme = 'red';

export const SearchBar = () => {
    return (
        <>
            <Input placeholder="What do you want to watch?"
                   type="search"
                   name="search"/>
            <Button colorScheme={buttonColorScheme}>Search</Button>
        </>
    )
}