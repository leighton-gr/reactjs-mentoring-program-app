import axios from "axios";
import { Movie } from "../types/types";

const url = 'http://localhost:8000'

export const getAllMovies = async () => {
    return axios.get(`${url}/movies`)
};

export const addMovie = async (data: Movie) => {
    return axios.post(`${url}/movies`, {
        data
    })
};

export const updateMovie = async (data: Movie) => {
    return axios.put(`${url}/movies`, {
        data
    })
}

export const deleteMovie = async (data: Movie) => {
    return axios.delete(`${url}/movies`, {
        data: data
    })
};