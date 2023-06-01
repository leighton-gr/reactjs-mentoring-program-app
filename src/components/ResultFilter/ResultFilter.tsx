import React, { useState } from 'react';
import { SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { ItemImage } from '../ItemImage/ItemImage';
import { MovieDetail } from '../MovieDetail';
import { Movie, MovieResponse } from '../../types/types';
import { ItemContextMenu } from '../ItemContextMenu/ItemContextMenu';
import {
    useLazyGetMoviesByGenreQuery
} from '../../redux/api';

type Props = {
    movieData?: Movie[];
}

export const tabData = {
    genres: [
        {
            label: 'All',
            value: 'all',
        },
        {
            label: 'Comedy',
            value: 'comedy',
        },
        {
            label: 'Action',
            value: 'action',
        },
        {
            label: 'Fantasy',
            value: 'fantasy',
        },
    ],
};

export const ResultFilter = ({ movieData }: Props) => {
    // const dispatch = useDispatch();
    // const filteredMoviesResponse = useTypedSelector(selectFilteredMovies);
    // have to use state as fetch from redux causing errors
    const [filteredData, setFilteredData] = useState<MovieResponse>();
    const [trigger] = useLazyGetMoviesByGenreQuery();

    // set in state movies queried by genres
    const getFilteredMoviesByGenre = async (filter: string) => {
        try {
            const { data } = await trigger({ filter: filter });

            setFilteredData(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Tabs>
                <TabList>
                    {tabData.genres.map(genre =>
                        <Tab onClick={() => getFilteredMoviesByGenre(genre.value)} key={genre.value}>{genre.label}</Tab>
                    )}
                </TabList>
                <TabPanels>
                    <TabPanel>
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
                </TabPanels>
                {filteredData &&
                    <SimpleGrid columns={3} spacing={5}>
                        {filteredData.data.map((movie: Movie) =>
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
            </Tabs>
        </>
    )
};