import React, { Component } from 'react';
import ItemProduct from './../Products/ItemProduct';
// import DataBase from './../../Database/Data.json';
import { getMovieList } from '../../Services';

export class LastestMovies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listData : []
    }
  }

  componentDidMount() {
    const params = {
      params1: "movie",
      params2: "latest"
    }

    const getMovie = getMovieList(params);

    getMovie.then(res=> {
      const listProduct = res.data;
      console.log("test res.data::::");
      console.log(res.data);

      this.setState({listData:listProduct});
    })
    .catch(error => console.log(error));
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState != this.state) {
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
    console.log("this.state.listData::::");
    console.log(this.state.listData);

    if ( itemMovie !== 0 ) {
      console.log("vvvvvv");
      console.log(itemMovie.id);
      // let itemLastestMovie = itemMovie.map(function(val, index){
      //   return (
      //     <div className="item" key={index} >
      //       <div className="w3l-movie-gride-agile w3l-movie-gride-slider">
      //         <ItemProduct data={val}/>
      //       </div>
      //     </div>
      //   )
      // })
      return ( <ItemProduct data={itemMovie}/> )
      
    }
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
