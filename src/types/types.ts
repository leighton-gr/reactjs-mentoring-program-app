export type MovieResponse = {
    data: Movie[];
}

export type Movie = {
    id: string;
    title: string;
    release_date: string;
    poster_path: string;
    overview: string;
    genres: string[];
    budget: number;
    revenue: number;
    runtime: number;
    tagline: string;
    vote_average: number;
    vote_count: number;
}