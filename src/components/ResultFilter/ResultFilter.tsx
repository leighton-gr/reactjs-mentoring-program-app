import React from 'react';
import { SimpleGrid, TabPanels, Tabs } from '@chakra-ui/react';
import { ItemImage } from '../ItemImage/ItemImage';
import { MovieDetail } from '../MovieDetail';
import { Movie } from '../../types/types';
import { ItemContextMenu } from '../ItemContextMenu/ItemContextMenu';
import { TabsList } from '../TabsList/';

type Props = {
    movieData?: Movie[];
}

export const ResultFilter = ({ movieData }: Props) => {
    return (
        <>
            <Tabs>
                <TabsList/>
                <TabPanels>
                    {movieData &&
                        <SimpleGrid columns={3} spacing={5}>
                            {movieData.map((movie: Movie) =>
                                <div key={movie?.id}>
                                    <ItemImage imageUrl={movie?.poster_path} movie={movie}/>
                                    <ItemContextMenu movie={movie}/>
                                    <MovieDetail key={movie?.id} genres={movie?.genres}
                                                 releaseDate={movie.release_date}
                                                 title={movie.title}/>
                                </div>
                            )}
                        </SimpleGrid>
                    }
                </TabPanels>
            </Tabs>
        </>
    )
};