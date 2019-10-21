import React, { Component } from 'react';
import RespTabList from './RespTabList';
import MainVideo from './MainVideo';
import ItemsVideo from './ItemsVideo';

export class AlignInfoTab extends Component {

  _letProductContent = [
    {
      'id': '1',
      'title': 'FORCE 2',
      'image': '/asset/images/11.jpg',
      'description': 'Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj Bhasin A film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....',
      'time': 'Sep 29, 2016',
      'ribben': 'New',
      'genres': 'Drama | Adventure | Family',
      'rate': '2 star'
    },
    {
      'id': '2',
      'title': 'Swiss Army Man',
      'image': '/asset/images/m2.jpg',
      'description': 'Presenting the official trailer of Force 2 starring John Abraham',
      'time': 'Sep 29, 2017',
      'ribben': 'Hot',
      'genres': 'Drama | Adventure',
      'rate': '3 star'
    },
    {
      'id': '3',
      'title': 'Me Before you',
      'image': '/asset/images/m3.jpg',
      'description': 'Sonakshi Sinha and Tahir Raj Bhasin A film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....',
      'time': 'Sep 9, 2016',
      'genres': 'Family',
      'rate': '3 star'
    },
    {
      'id': '4',
      'title': 'To initialise',
      'image': '/asset/images/m4.jpg',
      'description': 'Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....',
      'time': 'Sep 29, 2016',
      'ribben': 'Hit',
      'genres': 'Drama | Adventure | Family',
      'rate': '2 star'
    },
    {
      'id': '5',
      'title': 'May',
      'image': '/asset/images/m5.jpg',
      'description': 'Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj Bhasin A film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....',
      'time': 'Sep 29, 2019',
      'ribben': 'Hot',
      'genres': 'Drama',
      'rate': '4 star'
    },
    {
      'id': '6',
      'title': 'May',
      'image': '/asset/images/m6.jpg',
      'description': 'Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj Bhasin A film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....',
      'time': 'Sep 29, 2019',
      'ribben': 'Per',
      'genres': 'Drama',
      'rate': '4 star'
    }
  ];

  _letProductItem = () => {
    let itemProduct  = this._letProductContent.map(function(val, index) {
      if (index !== 0) {        
        return (      
          <ItemsVideo data={val} key={index}></ItemsVideo>
        )
      }
    });
    
    return itemProduct    
  };

  _letProductMainContent = ()=> {
    let mainProduct = this._letProductContent.map(function(val, index) {
      if (index === 0) {
        return (      
          <MainVideo data={val} key={index}></MainVideo>
        )
      }
    });

    return mainProduct
  };

  render() {
    return (
      <div className="agileinfo_tabs">
        <div id="horizontalTab">
          <RespTabList></RespTabList>
          <div className="resp-tabs-container">
            <div className="tab1">
              <div className="tab_movies_agileinfo">
                <div className="w3_agile_featured_movies">
                  { this._letProductMainContent() }

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
                  {this._letProductMainContent()}

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
                  {this._letProductMainContent()}

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
    )
  };
}

export default AlignInfoTab;
