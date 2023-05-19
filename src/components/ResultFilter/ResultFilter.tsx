import React from 'react';
import { SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { ItemImage } from '../ItemImage/ItemImage';
import { MovieDetail } from '../MovieDetail';
import { Movie } from '../../types/types';
import { ItemContextMenu } from '../ItemContextMenu/ItemContextMenu';

type Props = {
    movieData?: Movie[];
}

const genres = ['All', 'Comedy', 'Drama', 'Fantasy'];

export const ResultFilter = ({ movieData }: Props) => {
    return (
        <Tabs>
            <TabList>
                {genres.map(genre =>
                    <Tab key={genre}>{genre}</Tab>
                )};
            </TabList>
            <TabPanels>
                {genres.map(genre =>
                    <TabPanel key={genre}>
                        <SimpleGrid columns={3} spacing={5}>
                            {movieData.map((movie: Movie) =>
                                <div key={movie.id}>
                                    <ItemImage imageUrl={movie.poster_path} movie={movie}/>
                                    <ItemContextMenu movie={movie}/>
                                    <MovieDetail key={movie.id} genres={movie.genres} releaseDate={movie.release_date}
                                             title={movie.title}/>
                            </div>
                        )}
                    </SimpleGrid>
                </TabPanel>
                )};
            </TabPanels>
        </Tabs>
    )
};