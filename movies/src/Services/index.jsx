import axios from 'axios';

export const getMovieList = (params) => {
    

    const path = 'https://api.themoviedb.org/3/movie/popular?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1&language=en-US'
    return axios.get(path);
}