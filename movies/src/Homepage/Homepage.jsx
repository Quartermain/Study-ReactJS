import React, { Component } from 'react';
import Headers from './Header/Headers';
import BlockInfo from './BlockInfo/BlockInfo';
import Footers from '../Footers/Footers';
import FeatureProduct from './FeatureProduct/FeatureProduct';
import LastestMovies from './LastestMovies/LastestMovies';
import RequestedMovies from './RequestedMovies/RequestedMovies';
import TopMovies from './TopMovies/TopMovies';


export class Homepage extends Component {
  render() {
    return (
      <>
        <Headers/>
        <BlockInfo/>
        <div className="w3_content_agilleinfo_inner">
          <div className="agile_featured_movies">
            <FeatureProduct/>
            <LastestMovies/>
            <RequestedMovies/>
            <TopMovies/>
          </div>
        </div>
        <Footers/>
      </>
    );
  }
}

export default Homepage;
