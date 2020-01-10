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
            <TabRecent name='Tab1' recent='top_rated' />
            <TabRecent name='Tab2' popularity=''/>
            <TabRecent name='Tab3' toprate=''/>
          </div>
        </div>
      </div>
    );
  }
}

export default Tab;
