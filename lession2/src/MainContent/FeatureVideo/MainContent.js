import React, { Component } from 'react';
import AlignInfoTab from './AlignInfoTab';

export class MainContent extends Component {
  render() {
    return (
      <div className="w3_content_agilleinfo_inner">
        <div className="agile_featured_movies">
          <AlignInfoTab></AlignInfoTab>
        </div>
      </div>
    );
  }
}

export default MainContent;
