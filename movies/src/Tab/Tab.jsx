import React, { Component } from 'react';
import TabRecent from './TabRecent';

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
            <TabRecent name='Tab2' recent='popular'/>
            <TabRecent name='Tab3' recent='now_playing'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Tab;
