export type MovieResponse = {
    data: Movie[];
}

export type Movie = {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    overview: string;
    genres: string[];
    image: string;
    budget: number;
    revenue: number;
    runtime: number;
    tagline: string;
    vote_average: number;
    vote_count: number;
}