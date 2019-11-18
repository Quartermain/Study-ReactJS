import React, { Component } from 'react';
import DataBase from './../../Database/Data.json';
import ItemProduct from '../Products/ItemProduct.jsx';

export class RequestedMovies extends Component {
  _letRequestMovies = ()=> {
    let itemRequestMovies = DataBase.map(function(val, index){
      return (
        <div className="col-md-2 w3l-movie-gride-agile requested-movies" key={index}>
          <ItemProduct data={val} />
        </div>
      )
    })

    return (itemRequestMovies)
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
