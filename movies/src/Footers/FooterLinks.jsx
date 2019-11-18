import React, { Component } from 'react';

export class FooterLinks extends Component {
  render() {
    return (
    <div className="footer-grids w3-agileits">
      <div className="col-md-2 footer-grid">
        <h4>Release</h4>
        <ul> 
          <li><a href="#" title="Release 2016">2016</a></li> 
          <li><a href="#" title="Release 2015">2015</a></li>
          <li><a href="#" title="Release 2014">2014</a></li> 
          <li><a href="#" title="Release 2013">2013</a></li> 
          <li><a href="#" title="Release 2012">2012</a></li>
          <li><a href="#" title="Release 2011">2011</a></li> 
        </ul>
      </div>
      <div className="col-md-2 footer-grid">
        <h4>Movies</h4>
        <ul>
          <li><a href="genre.html">ADVENTURE</a></li>
          <li><a href="comedy.html">COMEDY</a></li>
          <li><a href="series.html">FANTASY</a></li>
          <li><a href="series.html">ACTION</a></li>
          <li><a href="genre.html">MOVIES</a></li>
          <li><a href="horror.html">HORROR</a></li>
        </ul>
      </div>
      <div className="col-md-2 footer-grid">
        <h4>Review Movies</h4>
        <ul className="w3-tag2">
          <li><a href="comedy.html">Comedy</a></li>
          <li><a href="horror.html">Horror</a></li>
          <li><a href="series.html">Historical</a></li>
          <li><a href="series.html">Romantic</a></li>
          <li><a href="series.html">Love</a></li>
          <li><a href="genre.html">Action</a></li>
          <li><a href="single.html">Reviews</a></li>
          <li><a href="comedy.html">Comedy</a></li>
          <li><a href="horror.html">Horror</a></li>
          <li><a href="series.html">Historical</a></li>
          <li><a href="series.html">Romantic</a></li>
          <li><a href="genre.html">Love</a></li>
          <li><a href="comedy.html">Comedy</a></li>
          <li><a href="horror.html">Horror</a></li>
          <li><a href="genre.html">Historical</a></li>
        </ul>
      </div>
      <div className="col-md-2 footer-grid">
        <h4>Latest Movies</h4>
        <div className="footer-grid1">
          <div className="footer-grid1-left">
            <a href="single.html"><img src="./assest/images/1.jpg" alt=" " className="img-responsive" /></a>
          </div>
          <div className="footer-grid1-right">
            <a href="single.html">eveniet ut molesti</a>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="footer-grid1">
          <div className="footer-grid1-left">
            <a href="single.html"><img src="./assest/images/2.jpg" alt=" " className="img-responsive" /></a>
          </div>
          <div className="footer-grid1-right">
            <a href="single.html">earum rerum tenet</a>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="footer-grid1">
          <div className="footer-grid1-left">
            <a href="single.html"><img src="./assest/images/4.jpg" alt=" " className="img-responsive" /></a>
          </div>
          <div className="footer-grid1-right">
            <a href="single.html">eveniet ut molesti</a>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="footer-grid1">
          <div className="footer-grid1-left">
            <a href="single.html"><img src="./assest/images/3.jpg" alt=" " className="img-responsive" /></a>
          </div>
          <div className="footer-grid1-right">
            <a href="single.html">earum rerum tenet</a>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
      <div className="col-md-2 footer-grid">
        <h4 className="b-log"><a href="index.html"><span>M</span>ovies <span>P</span>ro</a></h4>
        <div className="footer-grid-instagram">
          <a href="single.html"><img src="./assest/images/m1.jpg" alt=" " className="img-responsive" /></a>
        </div>
        <div className="footer-grid-instagram">
          <a href="single.html"><img src="./assest/images/m2.jpg" alt=" " className="img-responsive" /></a>
        </div>
        <div className="footer-grid-instagram">
          <a href="single.html"><img src="./assest/images/m3.jpg" alt=" " className="img-responsive" /></a>
        </div>
        <div className="footer-grid-instagram">
          <a href="single.html"><img src="./assest/images/m4.jpg" alt=" " className="img-responsive" /></a>
        </div>
        <div className="footer-grid-instagram">
          <a href="single.html"><img src="./assest/images/m5.jpg" alt=" " className="img-responsive" /></a>
        </div>
        <div className="footer-grid-instagram">
          <a href="single.html"><img src="./assest/images/m6.jpg" alt=" " className="img-responsive" /></a>
        </div>
        <div className="clearfix"> </div>
      </div>
      <div className="clearfix"> </div>
    </div>
    );
  }
}

export default FooterLinks;
