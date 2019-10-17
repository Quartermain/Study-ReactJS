import React, { Component } from 'react';

export class ItemsVideo extends Component {
  

  render() {
    // console.log(this.props)

    return (
      <div className="w3l-movie-gride-agile">
        <a href="single.html" className="hvr-sweep-to-bottom"><img src="/asset/images/m1.jpg" title="Movies Pro" className="img-responsive" alt=" " />
          <div className="w3l-action-icon"><i className="fa fa-play-circle-o" aria-hidden="true" /></div>
        </a>
        <div className="mid-1 agileits_w3layouts_mid_1_home">
          <div className="w3l-movie-text">
            <h6>
              <a href="single.html">
                { this.props.data.title }
                
              </a>
            </h6>
          </div>
          <div className="mid-2 agile_mid_2_home">
            <p>2016</p>
            <div className="block-stars">
              <ul className="w3l-ratings">
                <li><a href="#/"><i className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#/"><i className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#/"><i className="fa fa-star-o" aria-hidden="true" /></a></li>
                <li><a href="#/"><i className="fa fa-star-o" aria-hidden="true" /></a></li>
                <li><a href="#/"><i className="fa fa-star-o" aria-hidden="true" /></a></li>
              </ul>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="ribben">
          <p>NEW</p>
        </div>
      </div>
    );
  }
}

export default ItemsVideo;
