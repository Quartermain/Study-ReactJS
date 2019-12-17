import React, { Component } from 'react';
import { getMoviesList } from './Services';
import { getConfiguration } from './Services';

class ApiLession extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData : [],
            configuration : {
                images: {
                    "base_url": "",
                    "secure_base_url": "",
                    "backdrop_sizes": [
                      ""
                    ],
                    "logo_sizes": [
                      ""
                    ],
                }
            }
        }
    }

    _getConfigImage = ()=> {
        const configImage = getConfiguration();
        
        console.log("Get configImage:::");
        console.log(configImage);

        return configImage
    }

    _getMovieList = ()=> {
        const params = {
            param1: "movie",
            param2: "top_rated",
        }

        const getMovie = getMoviesList(params);

        console.log("Get getMovie:::");
        console.log(getMovie);

        return getMovie
    }

    _prosimeAll = ()=> {
        const getConfig = this._getConfigImage();
        const getMovie = this._getMovieList();

        Promise.all([getConfig, getMovie]).then(values => {
            const configImagePromise = values[0].data;
            const movieList = values[1].data;

            let pathImg = '';

            const base_url = configImagePromise.images.base_url;
            const backdrop_sizes = configImagePromise.images.backdrop_sizes;

            pathImg = base_url + backdrop_sizes[1];

            let movieListImg = movieList.results.map(function(movie){
                console.log(movie);
                let patImages = pathImg + movie.backdrop_path;
                
                return {
                    _id : movie.id,
                    _overview : movie.overview,
                    _url: patImages,
                    _title: movie.title
                };
            })

            this.setState({listData : movieListImg});

        }, reason => {
            console.log(reason)
        });
    }

    componentDidMount() {
        this._prosimeAll();
    }

    shouldComponentUpdate(nextProps, nextState){
        // console.log("Next state:::");
        // console.log(nextState);
        // console.log("This state:::");
        // console.log(this.state);

        if (nextState !== this.state) {
            return true
        } else {
            return false
        }
    }

    _itemProduct = ()=> {
        let itemDetail = this.state.listData;
        console.log("Call Sate list data:::::");
        console.log(itemDetail);

        if (itemDetail !== 0 ) {
            // console.log("Call Sate list data Item Detail:::::");
            // console.log(itemDetail);

            let item = itemDetail.map(function(val, index){
                console.log("Call du lieu::::");
                console.log(val);
                return (
                    <div data={val} key={index}>
                        {/* {val.id}<br/> */}
                        {val._id}<br/>
                        {val._overview}<br/>
                        <img src={val._url} alt={val._title} />
                        <br/>
                    </div>
                )  
            })
    
            return item
        }
    }

    render() {
        // console.log("Render::::");
        // console.log(this.state);

        return (
            <div>
                { this._itemProduct() }
            </div>
        );
    }
}

export default ApiLession;