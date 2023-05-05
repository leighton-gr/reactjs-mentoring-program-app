import React, { useContext } from 'react';
import { SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { ItemImage } from '../ItemImage/ItemImage';
import { MovieDetail } from '../MovieDetail';
import { Movie } from '../../types/types';
import { ItemContextMenu } from '../ItemContextMenu/ItemContextMenu';

type Props = {
    movieData?: Movie[];
}

export const ResultFilter = ({ movieData }: Props) => {
    // Todo refactor with dynamic data
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
                    <SimpleGrid columns={3} spacing={5}>
                        {movieData.map((movie: Movie) =>
                            <div key={movie.id}>
                                <ItemImage imageUrl={movie.image}/>
                                <ItemContextMenu/>
                                <MovieDetail key={movie.id} genre={movie.genre} releaseDate={movie.releaseDate}
                                             title={movie.title}/>
                            </div>
                        )}
                    </SimpleGrid>
                </TabPanel>
                <TabPanel>
                    <p>Sci-Fi</p>
                    <SimpleGrid columns={3} spacing={5}>
                    {movieData.map((movie: Movie) =>
                        <>
                            {movie.genre === 'Sci-Fi' ? (
                                <div>
                                    <ItemImage imageUrl={movie.image}/>
                                    <ItemContextMenu id={movie.id}/>
                                    <MovieDetail key={movie.id} genre={movie.genre} releaseDate={movie.releaseDate}
                                                 title={movie.title}/>
                                </div>
                            ) : null}
                        </>
                    )}
                    </SimpleGrid>
                </TabPanel>
                <TabPanel>
                    <p>Fantasy</p>
                    <SimpleGrid columns={3} spacing={5}>
                    {movieData.map((movie: Movie) =>
                        <>
                            {movie.genre === 'Fantasy' ? (
                                <div>
                                    <ItemImage imageUrl={movie.image}/>
                                    <ItemContextMenu id={movie.id}/>
                                    <MovieDetail key={movie.id} genre={movie.genre} releaseDate={movie.releaseDate}
                                                 title={movie.title}/>
                                </div>
                            ) : null}
                        </>
                    )}
                    </SimpleGrid>
                </TabPanel>
                <TabPanel>
                    <p>Comedy</p>
                    <SimpleGrid columns={3} spacing={5}>
                    {movieData.map((movie: Movie) =>
                        <>
                            {movie.genre === 'Comedy' ? (
                                <div>
                                    <ItemImage imageUrl={movie.image}/>
                                    <ItemContextMenu id={movie.id}/>
                                    <MovieDetail key={movie.id} genre={movie.genre} releaseDate={movie.releaseDate}
                                                 title={movie.title}/>
                                </div>
                            ) : null}
                        </>
                    )}
                    </SimpleGrid>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
};