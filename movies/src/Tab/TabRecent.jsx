import React, { Component } from 'react';
import { getConfiguration, getRecent } from '../Services';
import ItemProduct from '../Homepage/Products/ItemProduct';
import MainProduct from '../Homepage/Products/MainProduct';

class TabRecent extends Component {
    
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
    const getMovie = getRecent();

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
  
    _letTabRecentMovies = ()=> {
        let itemMovie = this.state.listData;

        if (itemMovie !==0) {
            let item = itemMovie.map(function(val, index){
                if (index < 8) {
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
            <div className="tab1">
              <div className="tab_movies_agileinfo">
                <div className="w3_agile_featured_movies">
                  <div className="col-md-5 video_agile_player">
                    { this._letTabRecentMainMovies() }                    
                  </div>
                  <div className="col-md-7 wthree_agile-movies_list">
                      { this._letTabRecentMovies() }             
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="cleafix" />
              </div>	
            </div>
        );
    }
}

export default TabRecent;