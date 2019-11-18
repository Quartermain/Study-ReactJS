import React, { Component } from 'react';

export class ItemProduct extends Component {
  render() {
    return (
      <div>
        <a href="single.html" className="hvr-sweep-to-bottom">
          <img src={this.props.data.img} title="Movies Pro" className="img-responsive" alt="true" />
          <div className="w3l-action-icon"><i className="fa fa-play-circle-o" aria-hidden="true" /></div>
        </a>
        <div className="mid-1 agileits_w3layouts_mid_1_home">
          <div className="w3l-movie-text">
            <h6><a href="single.html">{this.props.data.title}	</a></h6>							
          </div>
          <div className="mid-2 agile_mid_2_home">
            <p>{this.props.data.time}</p>
            <div className="block-stars">
              <ul className="w3l-ratings">
                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true" /></a></li>
              </ul>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="ribben one">
          <p>{this.props.data.ribben}</p>
        </div>
      </div>
    );
  }
}

export default ItemProduct;
