import React, { Component } from 'react';
import MainProduct from './../Homepage/Products/MainProduct';
import ItemProduct from './../Homepage/Products/ItemProduct';
import DataBase from './../Database/Data.json';
import axios from 'axios';

export class Tab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataBaseState : [],
      listDataTab : [],
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
  
  
  _getData = ()=> {
        
    let _dataAxios = axios.get('https://api.themoviedb.org/3/movie/latest?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1&language=en-US');

    let dataAsiox = _dataAxios.then(function (response) {
            // handle success
            return response;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    return dataAsiox;
  }

  _getItemsProduct = () => {
    this._getData();

    let itemProduct = DataBase.map(function(val, index){
      const totalItem = 5;
      if (index < totalItem){
        return {
          title: val.title,
          img: val.img,
          time: val.time,
          rate: val.rate
        }
      }
      return false;     
    });
    
    this.setState({dataBaseState: itemProduct });
  }

  componentDidMount() {
    this._getItemsProduct();
  }

  _letItemsProduct = () => {
    if (this.state.dataBaseState) {
      let itemTopProduct = this.state.dataBaseState.map(function(val, index){
        if(val) {
          return (
            <div className="w3l-movie-gride-agile" key={index}>
              <ItemProduct data={val} />
            </div>
          )
        }        
      })
      return (itemTopProduct)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state) {
      return true
    } else return false
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
