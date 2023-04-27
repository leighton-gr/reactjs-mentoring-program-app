import React from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ItemImage } from "../ItemImage/ItemImage";
import { MovieDetail } from "../MovieDetail";
import { Movie } from '../../types/types';
import { ItemContextMenu } from '../ItemContextMenu/ItemContextMenu';

type Props = {
    movieData: Movie[];
}

export const ResultFilter = ({ movieData }: Props) => {
    return (
        <Tabs>
            <TabList>
                <Tab>All</Tab>
                <Tab>Sci-Fi</Tab>
                <Tab>Fantasy</Tab>
                <Tab>Comedy</Tab>
            </TabList>
            <TabPanels>
                        <TabPanel>
                            <p>All</p>
                            {movieData.map((movie: Movie) =>
                                    <>
                                        <ItemImage imageUrl={movie.image}/>
                                        <ItemContextMenu />
                                        <MovieDetail key={movie.id} genre={movie.genre} releaseDate={movie.releaseDate} title={movie.title}/>
                                    </>
                                )}
                        </TabPanel>
                        <TabPanel>
                            <p>Sci-Fi</p>
                            {movieData.map((movie: Movie) =>
                                <>
                                    {movie.genre === 'Sci-Fi' ? (
                                        <>
                                            <ItemImage imageUrl={movie.image}/>
                                            <ItemContextMenu id={movie.id}/>
                                            <MovieDetail key={movie.id} genre={movie.genre} releaseDate={movie.releaseDate} title={movie.title}/>
                                        </>
                                    ) : null }
                                </>
                            )}
                        </TabPanel>
                        <TabPanel>
                            <p>Fantasy</p>
                            {movieData.map((movie: Movie) =>
                                <>
                                    {movie.genre === 'Fantasy' ? (
                                        <>
                                            <ItemImage imageUrl={movie.image}/>
                                            <ItemContextMenu id={movie.id}/>
                                            <MovieDetail key={movie.id} genre={movie.genre} releaseDate={movie.releaseDate} title={movie.title}/>
                                        </>
                                    ) : null }
                                </>
                            )}
                        </TabPanel>
                        <TabPanel>
                            <p>Comedy</p>
                            {movieData.map((movie: Movie) =>
                                <>
                                    {movie.genre === 'Comedy' ? (
                                        <>
                                            <ItemImage imageUrl={movie.image}/>
                                            <ItemContextMenu id={movie.id}/>
                                            <MovieDetail key={movie.id} genre={movie.genre} releaseDate={movie.releaseDate} title={movie.title}/>
                                        </>
                                    ) : null }
                                </>
                            )}
                        </TabPanel>
            </TabPanels>
        </Tabs>
    )
};