import React from 'react';
import { SimpleGrid, Tab, TabList, TabPanels, Tabs } from '@chakra-ui/react';
import { ItemImage } from '../ItemImage/ItemImage';
import { MovieDetail } from '../MovieDetail';
import { Movie } from '../../types/types';
import { ItemContextMenu } from '../ItemContextMenu/ItemContextMenu';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLazyGetMoviesBySearchTermQuery } from '../../redux/api';
import { filteredMovies } from '../../redux/appSlice';

type Props = {
    movieData?: Movie[];
}

export const tabData = {
    genres: [
        {
            label: 'All',
            value: '',
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
    const dispatch = useDispatch();
    const [trigger] = useLazyGetMoviesBySearchTermQuery();
    const [searchParams, setSearchParams] = useSearchParams();

    const setFilteredMovies = async (filter: string) => {
        try {
            const { data } = await trigger({ search: searchParams.get('search'), filter: filter }).unwrap();
            setSearchParams(`?search=${searchParams.get('search')}&filter=${filter}&sortBy=${searchParams.get('sortBy')}`);
            dispatch(filteredMovies(data));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Tabs defaultIndex={tabData.genres.findIndex(item => searchParams.get('filter') === item.value)}>
                <TabList>
                    {tabData.genres.map(genre =>
                        <Tab onClick={() => setFilteredMovies(genre.value)} key={genre.value}>{genre.label}</Tab>
                    )}
                </TabList>
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