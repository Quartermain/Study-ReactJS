import React, { Component } from 'react';

export class MainVideo extends Component {
  render() {
    return (
      <div className="col-md-5 video_agile_player">
        <div className="video-grid-single-page-agileits">
          <div data-video="f2Z65fobH2I" id="video"> <img src="/asset/images/11.jpg" alt="Video feature" className="img-responsive" /> </div>
        </div>
        <div className="player-text">
          <p className="fexi_header">Force 2</p>
          <p className="fexi_header_para"><span className="conjuring_w3">Story Line<label>:</label></span>Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj Bhasin
            A film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....</p>
          <p className="fexi_header_para"><span>Release On<label>:</label></span>Sep 29, 2016 </p>
          <p className="fexi_header_para">
            <span>Genres<label>:</label> </span>
            <a href="genre.html">Drama</a> | 
            <a href="genre.html">Adventure</a> | 
            <a href="genre.html">Family</a>								
          </p>
          <p className="fexi_header_para fexi_header_para1"><span>Star Rating<label>:</label></span>
            <a href="#/"><i className="fa fa-star" aria-hidden="true" /></a>
            <a href="#/"><i className="fa fa-star" aria-hidden="true" /></a>
            <a href="#/"><i className="fa fa-star-half-o" aria-hidden="true" /></a>
            <a href="#/"><i className="fa fa-star-o" aria-hidden="true" /></a>
            <a href="#/"><i className="fa fa-star-o" aria-hidden="true" /></a>
          </p>
        </div>
      </div>
    );
  }
}

export default MainVideo;
