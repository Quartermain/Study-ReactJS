import React, { Component } from 'react';

export class MainProduct extends Component {
  render() {
    return (
      <div>
        <div className="video-grid-single-page-agileits">
          <div data-video="BXEZFd0RT5Y" id="video3"><img src={this.props.data.img} alt="true" className="img-responsive" /> </div>
        </div>
        <div className="player-text two">
          <p className="fexi_header">{ this.props.data.title }</p>
          <p className="fexi_header_para"><span className="conjuring_w3">Story Line<label>:</label></span>
          { this.props.data.description }
          </p>
          <p className="fexi_header_para"><span>Release On<label>:</label></span>
            {this.props.data.releaseOn }
          </p>
          <p className="fexi_header_para">
            <span>Genres<label>:</label> </span>
            {this.props.data.genres}							
          </p>
          <p className="fexi_header_para fexi_header_para1"><span>Star Rating<label>:</label></span>
            <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-star-half-o" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
          </p>
        </div>
      </div>
    );
  }
}

export default MainProduct;
