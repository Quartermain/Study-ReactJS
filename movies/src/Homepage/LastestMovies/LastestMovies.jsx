import React, { Component } from 'react';
import ItemProduct from './../Products/ItemProduct';
import DataBase from './../../Database/Data.json';
// import Services from './../../Services';

export class LastestMovies extends Component {
 
  _letLastestMovies = ()=> {
    let itemLastestMovie = DataBase.map(function(val, index){
      return (
        <div className="item" key={index} >
          <div className="w3l-movie-gride-agile w3l-movie-gride-slider">
            <ItemProduct data={val}/>
          </div>
        </div>
      )
    })

    return ( itemLastestMovie )
  }
  

  render() {
    return (
      <div>
        <h3 className="agile_w3_title"> Latest <span>Movies</span></h3>
        <div className="w3_agile_latest_movies">
          <div id="owl-demo" className="owl-carousel owl-theme">
            {this._letLastestMovies()}
          </div>
        </div>

        {/* <Services/> */}
      </div>

    );
  }
}

export default LastestMovies;
