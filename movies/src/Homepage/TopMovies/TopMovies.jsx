import React, { Component } from 'react';
import { getConfiguration, getTabData } from '../../Services';
import ItemProduct from '../Products/ItemProduct';
import MainProduct from '../Products/MainProduct';


export class TopMovies extends Component {
   
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

  _getTabData =()=> {
    const params = {
      param1 : 'movie',
      param2 : 'popular'
    }
    
    const getMovie = getTabData(params);

    return getMovie
  }

  _formatDate =(date)=> {
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
  
    return monthNames[monthIndex] + ' ' + day + ' ' + year;    
  }

  _promissAll = ()=> {
    const getConfig = this._getConfigImage();
    const getList = this._getTabData();
    const that = this;
    Promise.all([getConfig, getList]).then(values => {
      const configPromisImage = values[0].data.images;
      // Get url image product
      const base_url = configPromisImage.base_url;
      const backdrop_sizes = configPromisImage.backdrop_sizes[2];
      const poster_sizes = configPromisImage.poster_sizes[5];      

      const pathUrl = base_url + backdrop_sizes;
      const pathUrlPoster = base_url + poster_sizes

      const configGetList = values[1].data.results;      

      let listMovie = configGetList.map(function(movie){

        let patImageMovie = pathUrl + movie.poster_path;
        let pathImageLarger = pathUrlPoster + movie.poster_path;
        // show only Year
        let fullYear = new Date(movie.release_date);
        let year = fullYear.getFullYear();

        // Show full date month day year

        let fullMDY = that._formatDate(fullYear);

        return {
          _id: movie.id,
          _url: patImageMovie,
          _url_Larg: pathImageLarger,
          _title: movie.title,
          _overview: movie.overview,
          _time: year,
          _timeFull: fullMDY,
          _genre: movie.genre_ids,
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

  _letTabRecentMovies = ()=> {
    let itemMovie = this.state.listData;

    if (itemMovie !==0) {
      let item = itemMovie.map(function(val, index){
        if (index > 1 && index < 10) {
          return (             
            <div className="w3l-movie-gride-agile" key={index}>
                <ItemProduct data={val} />
            </div>
          )
        }
      })

      return item
    }
  }

  _letTabRecentMainMovies = ()=> {
    let itemMovie = this.state.listData;

    if (itemMovie !==0) {
      let item = itemMovie.map(function(val, index){
          if (index == 0) {
            return (
              <MainProduct data={val} key={index} />
            )
          }
      })

      return item
    }
  }

  render() {
    return (
      <>
        <h3 className="agile_w3_title">Top<span>Movies</span> </h3>
        <div className="top_movies">
          <div className="tab_movies_agileinfo">
            <div className="w3_agile_featured_movies two">
              <div className="col-md-7 wthree_agile-movies_list second-top">
                { this._letTabRecentMovies() }
                
              </div>
              <div className="col-md-5 video_agile_player second-top">
                { this._letTabRecentMainMovies() }
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="cleafix" />
          </div>	
        </div>
      </>
    );
  }
}

export default TopMovies;
