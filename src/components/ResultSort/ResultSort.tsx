import React from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export const ResultSort = () => {
    return (
        <>
            <span>Sort By</span>
            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton isActive={isOpen} as={Button}>
                            {isOpen ? 'Release Date' : 'Genre'}
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Release Date</MenuItem>
                            <MenuItem>Genre</MenuItem>
                        </MenuList>
                    </>
                )}
            </Menu>
        </>
    )
}