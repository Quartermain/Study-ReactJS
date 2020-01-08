import React, { Component } from 'react';
import TabRecent from './TabRecent';
import TabPopularity from './TabPopularity';
import TabTopRating from './TabTopRating';

export class Tab extends Component {

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
            <TabRecent/>
            <TabPopularity/>
            <TabTopRating/>
          </div>
        </div>
      </div>
    );
  }
}

export default Tab;
