import React, { Component } from 'react';
import RespTabList from './RespTabList';
import MainVideo from './MainVideo';
import ItemsVideo from './ItemsVideo';

export class AlignInfoTab extends Component {
  render() {
    return (
      <div className="agileinfo_tabs">
        <div id="horizontalTab">
          <RespTabList></RespTabList>
          <div className="resp-tabs-container">
            <div className="tab1">
              <div className="tab_movies_agileinfo">
                <div className="w3_agile_featured_movies">
                  <MainVideo></MainVideo>
                  <div className="col-md-7 wthree_agile-movies_list">
                    <ItemsVideo></ItemsVideo>
                    <ItemsVideo></ItemsVideo>
                    <ItemsVideo></ItemsVideo>
                    <ItemsVideo></ItemsVideo>
                    <ItemsVideo></ItemsVideo>
                    <ItemsVideo></ItemsVideo>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="cleafix" />
              </div>	
            </div>
            <div className="tab2">
              <div className="tab_movies_agileinfo">
                <div className="w3_agile_featured_movies">
                  <MainVideo></MainVideo>
                  <div className="col-md-7 wthree_agile-movies_list">
                    <ItemsVideo></ItemsVideo>
                    <ItemsVideo></ItemsVideo>
                    <ItemsVideo></ItemsVideo>
                    <ItemsVideo></ItemsVideo>
                    <ItemsVideo></ItemsVideo>
                    <ItemsVideo></ItemsVideo>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="cleafix" />
              </div>	
            </div>
            <div className="tab3">
              <div className="tab_movies_agileinfo">
                <div className="w3_agile_featured_movies">
                  <MainVideo></MainVideo>

                  <div className="col-md-7 wthree_agile-movies_list">
                    <ItemsVideo></ItemsVideo>
                    <ItemsVideo></ItemsVideo>
                    <ItemsVideo></ItemsVideo>
                    <ItemsVideo></ItemsVideo>
                    <ItemsVideo></ItemsVideo>
                    <ItemsVideo></ItemsVideo>
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

export default AlignInfoTab;
