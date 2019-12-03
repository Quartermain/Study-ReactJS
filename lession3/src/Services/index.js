import axios from 'axios';

export const getMoviesList = (params) => {
    const bien1 = params.param1;
    const bien2 = params.param2;

    const path = 'https://api.themoviedb.org/3/'+ bien1 +'/'+ bien2 +'?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1&language=en-US&page=1'
    console.log("Show path::::::");
    console.log(path);
    return axios.get(path);
};