import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = '1e2d3e04a46a4b641682a83ebd1b0bf1';
const END_POINT = 'https://api.themoviedb.org';

class index extends Component {
    _getData = ()=> {
        
        axios.get('https://api.themoviedb.org/3/movie/latest?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1&language=en-US')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    }

    render() {
        return (
            <div>
                {this._getData()}
            </div>
        );
    }
}

export default index;