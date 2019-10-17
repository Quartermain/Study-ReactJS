import React, { Component } from 'react';
import RespTabList from './RespTabList';
import MainVideo from './MainVideo';
import ItemsVideo from './ItemsVideo';

export class AlignInfoTab extends Component {

  _letProductContent = [
    {
      'id': '1',
      'title': 'FORCE 2',
      'description': 'Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj Bhasin A film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....',
      'time': 'Sep 29, 2016',
      'genres': 'Drama | Adventure | Family',
      'rate': '2 star'
    },
    {
      'id': '2',
      'title': 'Swiss Army Man',
      'description': 'Presenting the official trailer of Force 2 starring John Abraham',
      'time': 'Sep 29, 2017',
      'genres': 'Drama | Adventure',
      'rate': '3 star'
    },
    {
      'id': '3',
      'title': 'Me Before you',
      'description': 'Sonakshi Sinha and Tahir Raj Bhasin A film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....',
      'time': 'Sep 9, 2016',
      'genres': 'Family',
      'rate': '3 star'
    },
    {
      'id': '4',
      'title': 'To initialise',
      'description': 'Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....',
      'time': 'Sep 29, 2016',
      'genres': 'Drama | Adventure | Family',
      'rate': '2 star'
    },
    {
      'id': '5',
      'title': 'May',
      'description': 'Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj Bhasin A film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....',
      'time': 'Sep 29, 2019',
      'genres': 'Drama',
      'rate': '4 star'
    },
    {
      'id': '5',
      'title': 'May',
      'description': 'Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj Bhasin A film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....',
      'time': 'Sep 29, 2019',
      'genres': 'Drama',
      'rate': '4 star'
    }
  ];

  _letProductItem = () => {
    let itemProduct  = this._letProductContent.map(function(val, index) {
      console.log(val);
      console.log(index);

      if (index === 0) {
        
      }

      return (      
        <ItemsVideo data={val} key={index}></ItemsVideo>
      )
    });
    
    return itemProduct
    
  }
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
                    { this._letProductItem() }
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
                    { this._letProductItem() }
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
                    { this._letProductItem() }
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
