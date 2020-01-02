import React, { Component } from 'react';
// import DataBase from './../../Database/Data.json';
import ItemProduct from '../Products/ItemProduct.jsx';
import { getUpComingList, getConfiguration } from '../../Services/index.jsx';

export class RequestedMovies extends Component {
  // _letRequestMovies = ()=> {
  //   let itemRequestMovies = DataBase.map(function(val, index){
  //     return (
  //       <div className="col-md-2 w3l-movie-gride-agile requested-movies" key={index}>
  //         <ItemProduct data={val} />
  //       </div>
  //     )
  //   })

  //   return (itemRequestMovies)
  // }

  constructor(props) {
    super(props);
    this.state= {
      listData : [],
      configuration : {
        "base_url": "",
        "secure_base_url": "",
        "backdrop_sizes": [
          ""
        ]
      }
    }
  }

  _getConfigImg = ()=> {
    const configImg = getConfiguration();

    return configImg
  }

  _getMoviveRequest = ()=> {
    const getMovieList = getUpComingList();

    return getMovieList;
  }

  _promisAll = ()=> {
    const getConfig = this._getConfigImg();
    const getMoviList = this._getMoviveRequest();

    Promise.all([getConfig, getMoviList]).then(values => {
      console.log(values)
      const configPromisImg = values[0].data.images;
      const base_url = configPromisImg.base_url;
      const backdrop_sizes = configPromisImg.backdrop_sizes[2];
      const pathImg = base_url + backdrop_sizes;

      const getListMovie = values[1].data.results;

      let listMoive = getListMovie.map(function(movie){
        let patImageMovie = pathImg + movie.poster_path;
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

      this.setState({listData: listMoive})

    }, reason => {
      console.log(reason)
    });
  }

  componentDidMount(){
    this._promisAll();
  }

  
  _letRequestMovies = ()=> {
    let itemMovie = this.state.listData;

    if (itemMovie !==0) {
      let item = itemMovie.map(function(val, index){
        return ( 
          <div className="col-md-2 w3l-movie-gride-agile requested-movies" key={index}>
            <ItemProduct data={val} />
          </div>
        )
      })

      return item
    }
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state) {
      return true;
    } else {
      return false;
    }
  }


  render() {
    return (
      <div>
        <div>
          {/*//movies*/}
          <h3 className="agile_w3_title">Requested <span>Movies</span> </h3>
          {/*/requested-movies*/}
          <div className="wthree_agile-requested-movies">
            {this._letRequestMovies()}
            <div className="clearfix" />
            
          </div>
        </div>
      </div>
    );
  }
}

export default RequestedMovies;
