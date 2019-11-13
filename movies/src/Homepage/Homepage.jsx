import React, { Component } from 'react';
import Headers from './Header/Headers';
import BlockInfo from './BlockInfo/BlockInfo';
import Footers from '../Footers/Footers';
import FeatureProduct from './FeatureProduct/FeatureProduct';
export class Homepage extends Component {
  render() {
    return (
      <div>
        <Headers/>
        <BlockInfo/>
        <div className="w3_content_agilleinfo_inner">
          <div className="agile_featured_movies">
            <FeatureProduct/>
          </div>
        </div>
        <Footers/>
      </div>
    );
  }
}

export default Homepage;
