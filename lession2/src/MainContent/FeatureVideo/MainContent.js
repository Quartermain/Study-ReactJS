import React, { Component } from 'react';
import AlignInfoTab from './AlignInfoTab';
import TitleHeader from '../TitleHeader';
import LastestMovies from '../LastestMovies';

export class MainContent extends Component {
  render() {
    return (
      <div className="w3_content_agilleinfo_inner">
        <div className="agile_featured_movies">
          <AlignInfoTab></AlignInfoTab>
          <TitleHeader></TitleHeader>
          <LastestMovies></LastestMovies>
        </div>
      </div>
    );
  }
}

export default MainContent;
