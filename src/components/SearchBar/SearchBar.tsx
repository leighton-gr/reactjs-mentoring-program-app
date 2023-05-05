import React from 'react';
import { Button, Input } from '@chakra-ui/react';

const buttonColorScheme = 'red';

type Props = {
    showSearchBar?: boolean;
}

export const SearchBar = ({ showSearchBar }: Props) => {
    return (
        <>
            <Input placeholder="What do you want to watch?"
                   type="search"
                   name="search"/>
            <Button colorScheme={buttonColorScheme}>Search</Button>
        </>
    )
}