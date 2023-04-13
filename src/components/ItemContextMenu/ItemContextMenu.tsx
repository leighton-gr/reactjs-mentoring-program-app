import React from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export const ItemContextMenu = () => {
    return (
        <Menu>
            <MenuButton as={Button}>
                Actions
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
    )
}