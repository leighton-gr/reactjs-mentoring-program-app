import React from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ItemImage } from "../ItemImage/ItemImage";
import { MovieDetail } from "../MovieDetail";

export const ResultFilter = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>All</Tab>
                <Tab>Documentary</Tab>
                <Tab>Comedy</Tab>
                <Tab>Horror</Tab>
                <Tab>Crime</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>All</p>
                    <ItemImage/>
                    <MovieDetail genre={'All'} releaseDate={''} title={''}/>
                </TabPanel>
                <TabPanel>
                    <p>Documentary</p>
                    <ItemImage/>
                    <MovieDetail genre={'Documentary'} releaseDate={''} title={''}/>
                </TabPanel>
                <TabPanel>
                    <p>Comedy</p>
                    <ItemImage/>
                    <MovieDetail genre={'Comedy'} releaseDate={''} title={''}/>
                </TabPanel>
                <TabPanel>
                    <p>Horror</p>
                    <ItemImage/>
                    <MovieDetail genre={'Horror'} releaseDate={''} title={''}/>
                </TabPanel>
                <TabPanel>
                    <p>Crime</p>
                    <ItemImage/>
                    <MovieDetail genre={'Crime'} releaseDate={''} title={''}/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
};