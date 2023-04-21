import React, { useState } from 'react';
import { ResultFilter } from "../ResultFilter";
import { ResultSort } from "../ResultSort";
import { ResultCount } from "../ResultCount";

// Todo make props
export const COUNT = 39;

export const MovieSection = () => {
    const [movies, setMovies] = useState([
        {
            "id": 1,
            "title": "Pulp Fiction",
            "releaseDate": "1994",
            "genre": "Comedy",
            "image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            "id": 2,
            "title": "Star Wars: Episode VII - The Force Awakens",
            "releaseDate": "2015",
            "genre": "Sci-Fi",
            "image": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
        },
        {
            "id": 3,
            "title": "Harry Potter and the Deathly Hallows: Part 2",
            "releaseDate": "2011",
            "genre": "Fantasy",
            "image": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
            "id": 4,
            "title": "Harry Potter and the Sorcerer's Stone",
            "releaseDate": "2001",
            "genre": "Fantasy",
            "image": "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
        },
        {
            "id": 5,
            "title": "Harry Potter and the Chamber of Secrets",
            "releaseDate": "2002",
            "genre": "Fantasy",
            "image": "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg"
        },
        {
            "id": 6,
            "title": "Harry Potter and the Prisoner of Azkaban",
            "releaseDate": "2004",
            "genre": "Fantasy",
            "image": "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg"
        },
        {
            "id": 7,
            "title": "Harry Potter and the Goblet of Fire",
            "releaseDate": "2005",
            "genre": "Fantasy",
            "image": "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg"
        },
        {
            "id": 8,
            "title": "Harry Potter and the Order of the Phoenix",
            "releaseDate": "2007",
            "genre": "Fantasy",
            "image": "https://m.media-amazon.com/images/M/MV5BOTA3MmRmZDgtOWU1Ny00ZDc5LWFkN2YtNzNlY2UxZmY0N2IyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
            "id": 9,
            "title": "Harry Potter and the Deathly Hallows: Part 1",
            "releaseDate": "2010",
            "genre": "Fantasy",
            "image": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
        },
        {
            "id": 10,
            "title": "Harry Potter and the Half-Blood Prince",
            "releaseDate": "2009",
            "genre": "Fantasy",
            "image": "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"
        },
        {
            "id": 11,
            "title": "Harry Potter 20th Anniversary: Return to Hogwarts",
            "releaseDate": "2022",
            "genre": "Fantasy",
            "image": "https://m.media-amazon.com/images/M/MV5BNTZkNWEyZTgtYzJlOS00OWNiLTgwZjMtZGU5NTRhNDNjOTRhXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg"
        },
        {
            "id": 12,
            "title": "Harry Potter and the Forbidden Journey",
            "releaseDate": "2010",
            "genre": "Fantasy",
            "image": "https://m.media-amazon.com/images/M/MV5BNDM0YzMyNGUtMTU1Yy00OTE2LWE5NzYtZDZhMTBmN2RkNjg3XkEyXkFqcGdeQXVyMzU5NjU1MDA@._V1_SX300.jpg"
        },
        {
            "id": 13,
            "title": "Star Wars: Episode VII - The Force Awakens",
            "releaseDate": "2015",
            "genre": "Sci-Fi",
            "image": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
        },
        {
            "id": 14,
            "title": "Star Wars: Episode V - The Empire Strikes Back",
            "releaseDate": "1980",
            "genre": "Sci-Fi",
            "image": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            "id": 15,
            "title": "Star Wars: Episode VI - Return of the Jedi",
            "releaseDate": "1983",
            "genre": "Sci-Fi",
            "image": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        }]);

    return (
        <>
            <ResultFilter movies={movies}/>
            <ResultSort/>
            <ResultCount count={COUNT}/>
        </>
    )
}