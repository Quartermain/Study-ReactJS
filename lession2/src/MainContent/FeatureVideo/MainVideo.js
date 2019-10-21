import React, { Component } from 'react';

export class MainVideo extends Component {
  render() {
    return (
      <div className="col-md-5 video_agile_player">
        <div className="video-grid-single-page-agileits">
          <div data-video="f2Z65fobH2I" id="video">           
            <img src={this.props.data.image } alt="Video feature" className="img-responsive" /> 
          </div>
        </div>
        <div className="player-text">
          <p className="fexi_header">
            {this.props.data.title }
          </p>
          <p className="fexi_header_para">
            <span className="conjuring_w3">Story Line :</span>
            {this.props.data.description}
          </p>
          <p className="fexi_header_para">
            <span>Release On :</span>
            {this.props.data.time}
          </p>
          <p className="fexi_header_para">
            <span>Genres :</span>
            {this.props.data.genres}						
          </p>
          <p className="fexi_header_para fexi_header_para1"><span>Star Rating :</span>
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
