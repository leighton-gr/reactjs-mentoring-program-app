import React, { useState } from 'react';
import { Select } from '@chakra-ui/react';

type Props = {
    setSortBy: (v: string) => void;
}

const dropdownData = {
    options: [
        {
            label: 'Release Date',
            value: 'releaseDate',
        },
    ],
};

export const ResultSort = ({ setSortBy }: Props) => {
    const [selectedOption, setSelectedOption] = useState(dropdownData.options[0].value)
    const handleCallback = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
        setSortBy(selectedOption)
    }

    return (
        <>
            <span>Sort By</span>
            <Select onChange={e => handleCallback(e)} value={selectedOption || 'releaseDate'}>
                {dropdownData.options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </Select>
        </>
    )
}