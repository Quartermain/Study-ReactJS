import React, { Component } from 'react';
import MainProduct from './../Homepage/Products/MainProduct';
import ItemProduct from './../Homepage/Products/ItemProduct';
import DataBase from './../Database/Data.json';


export class Tab extends Component {
  
  _letItemsProduct = () => {
    let itemProduct = DataBase.map(function(val, index){
      return (
        <div className="w3l-movie-gride-agile" key={index}>
          <ItemProduct data={val} />
        </div>
      )
    })
    return (itemProduct)
  }

  _letMainProduct = () => {
    let itemMainProduct = DataBase.map(function(val, index){
      if (index === 0) {
        return (
          <MainProduct data={val} key={index} />
        )  
      }
    })

    return (itemMainProduct)
  }

  render() {
    return (
      <div className="agileinfo_tabs">
        <div id="horizontalTab">
          <ul className="resp-tabs-list">
            <li>Recent</li>
            <li>Popularity</li>
            <li>Top Rating </li>
          </ul>
          <div className="resp-tabs-container">
            <div className="tab1">
              <div className="tab_movies_agileinfo">
                <div className="w3_agile_featured_movies">
                  <div className="col-md-5 video_agile_player">
                    { this._letMainProduct() }
                  </div>
                  <div className="col-md-7 wthree_agile-movies_list">
                      { this._letItemsProduct() }
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="cleafix" />
              </div>	
            </div>
            <div className="tab2">
              <div className="tab_movies_agileinfo">
                <div className="w3_agile_featured_movies">
                  <div className="col-md-5 video_agile_player">
                    { this._letMainProduct() }
                  </div>
                  <div className="col-md-7 wthree_agile-movies_list">
                      { this._letItemsProduct() }
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="cleafix" />
              </div>	
            </div>
            <div className="tab3">
              <div className="tab_movies_agileinfo">
                <div className="w3_agile_featured_movies">
                  <div className="col-md-5 video_agile_player">
                    { this._letMainProduct() }
                  </div>
                  <div className="col-md-7 wthree_agile-movies_list">
                      { this._letItemsProduct() }
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="cleafix" />
              </div>	
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tab;
