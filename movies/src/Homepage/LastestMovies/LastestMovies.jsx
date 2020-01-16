import React, { Component } from 'react';
import ItemProduct from './../Products/ItemProduct';
import { getDiscoverList } from '../../Services';
import { getConfiguration } from '../../Services';

export class LastestMovies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listData : [],
      configuration: {
        images: {
          "base_url": "",
          "secure_base_url": "",
          "backdrop_sizes": [
            ""
          ]
        }
      }
    }
  }

  _getConfigImage =() => {
    const configImg = getConfiguration();

    return configImg
  }

  _getDiscoverList =()=> {
    const params = {
      params1: "discover",
      params2: "movie"
    }

    const getMovie = getDiscoverList(params);

    return getMovie
  }

  _promissAll = ()=> {
    const getConfig = this._getConfigImage();
    const getList = this._getDiscoverList();

    Promise.all([getConfig, getList]).then(values => {
      const configPromisImage = values[0].data.images;

      const base_url = configPromisImage.base_url;
      const backdrop_sizes = configPromisImage.backdrop_sizes[2];

      const pathUrl = base_url + backdrop_sizes;

      const configGetList = values[1].data.results;

      let listMovie = configGetList.map(function(movie){

        let patImageMovie = pathUrl + movie.poster_path;
        let fullYear = new Date(movie.release_date);
        let year = fullYear.getFullYear()

        return {
          _id: movie.id,
          _url: patImageMovie,
          _title: movie.title,
          _time: year,
          _vote_average: movie.vote_average
        }
      })

      this.setState({listData : listMovie})
    }, reason => {
      console.log(reason)
    });
  }

  componentDidMount() {
    this._promissAll();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate(prevProps) {
    window.initSlider();
  }
  
  _letLastestMovies = ()=> {
    let itemMovie = this.state.listData;

    // console.log(itemMovie);

    if (itemMovie !==0) {
      let item = itemMovie.map(function(val, index){
        return ( 
          <div className="item" key={index}>
						<div className="w3l-movie-gride-agile w3l-movie-gride-slider">
              <ItemProduct data={val} /> 
            </div>
          </div>
        )
      })

      return item
    }
  }

  render() {
    return (
      <>
        <h3 className="agile_w3_title"> Latest <span>Movies</span></h3>
        <div className="w3_agile_latest_movies">
          <div id="owl-demo" className="owl-carousel owl-theme">
            {this._letLastestMovies()}
          </div>
        </div>
      </>
    );
  }
}

export default LastestMovies;
