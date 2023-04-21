import React from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ItemImage } from "../ItemImage/ItemImage";
import { MovieDetail } from "../MovieDetail";

type Props = {
    movies: Movie[];
}

type Movie = {
    id: number;
    title: string;
    releaseDate: string;
    genre: string;
    image: string;
}

export const ResultFilter = ({ movies }: Props) => {
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
                            {movies.map((movie) =>
                                    <>
                                        <ItemImage imageUrl={movie.image}/>
                                        <MovieDetail key={movie.id} genre={movie.genre} releaseDate={movie.releaseDate} title={movie.title}/>
                                    </>
                                )}
                        </TabPanel>
                        <TabPanel>
                            <p>Sci-Fi</p>
                            {movies.map((movie) =>
                                <>
                                    {movie.genre === 'Sci-Fi' ? (
                                        <>
                                            <ItemImage imageUrl={movie.image}/>
                                            <MovieDetail key={movie.id} genre={movie.genre} releaseDate={movie.releaseDate} title={movie.title}/>
                                        </>
                                    ) : null }
                                </>
                            )}
                        </TabPanel>
                        <TabPanel>
                            <p>Fantasy</p>
                            {movies.map((movie) =>
                                <>
                                    {movie.genre === 'Fantasy' ? (
                                        <>
                                            <ItemImage imageUrl={movie.image}/>
                                            <MovieDetail key={movie.id} genre={movie.genre} releaseDate={movie.releaseDate} title={movie.title}/>
                                        </>
                                    ) : null }
                                </>
                            )}
                        </TabPanel>
                        <TabPanel>
                            <p>Comedy</p>
                            {movies.map((movie) =>
                                <>
                                    {movie.genre === 'Comedy' ? (
                                        <>
                                            <ItemImage imageUrl={movie.image}/>
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