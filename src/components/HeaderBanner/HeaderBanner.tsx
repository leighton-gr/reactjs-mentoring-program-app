import React from "react";
import { SearchBar } from "../SearchBar";
import { Button } from "@chakra-ui/react";

const buttonColorScheme = 'red';

export const HeaderBanner = () => {
    return (
        <div>
            {/* Assets for bg */}
            <h1>FIND YOUR MOVIE</h1>
            <Button colorScheme={buttonColorScheme} variant='outline'/>
            <SearchBar />
            <Button colorScheme={buttonColorScheme} />
        </div>
    )
}