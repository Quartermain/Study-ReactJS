import React, { Component } from 'react';
import ItemProduct from '../Products/ItemProduct';
import MainProduct from '../Products/MainProduct';
import DataBase from './../../Database/Data.json';

export class TopMovies extends Component {
  _letTopMovies = ()=> {
    let itemTopProduct = DataBase.map(function(val, index){
      return (
        <div className="w3l-movie-gride-agile">
          <ItemProduct data={val} />
        </div>
      )
    })
    return (itemTopProduct)
  }

  render() {
    return (
      <div>
        <div>
          <h3 className="agile_w3_title">Top<span>Movies</span> </h3>
          <div className="top_movies">
            <div className="tab_movies_agileinfo">
              <div className="w3_agile_featured_movies two">
                <div className="col-md-7 wthree_agile-movies_list second-top">
                  {this._letTopMovies()}
                </div>
                <div className="col-md-5 video_agile_player second-top">
                  <div className="video-grid-single-page-agileits">
                    <div data-video="BXEZFd0RT5Y" id="video3"> <img src="images/44.jpg" alt className="img-responsive" /> </div>
                  </div>
                  <div className="player-text two">
                    <p className="fexi_header">Storks </p>
                    <p className="fexi_header_para"><span className="conjuring_w3">Story Line<label>:</label></span>Starring: Andy Samberg, Jennifer Aniston, Ty Burrell
                      Storks Official Trailer 3 (2016) - Andy Samberg Movie  the company's top delivery stork, lands in hot water when the Baby Factory produces an adorable....... </p>
                    <p className="fexi_header_para"><span>Release On<label>:</label></span>Aug 1, 2016 </p>
                    <p className="fexi_header_para">
                      <span>Genres<label>:</label> </span>
                      <a href="genre.html">Drama</a> | 
                      <a href="genre.html">Adventure</a> | 
                      <a href="genre.html">Family</a>								
                    </p>
                    <p className="fexi_header_para fexi_header_para1"><span>Star Rating<label>:</label></span>
                      <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                      <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                      <a href="#"><i className="fa fa-star-half-o" aria-hidden="true" /></a>
                      <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                      <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                    </p>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="cleafix" />
            </div>	
          </div>
        </div>
      </div>
    );
  }
}

export default TopMovies;
