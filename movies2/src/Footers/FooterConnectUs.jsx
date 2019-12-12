import React, { Component } from 'react';

export class FooterConnectUs extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center follow">Connect <span>Us</span></h3>
        <ul className="social-icons1 agileinfo">
          <li><a href="#"><i className="fa fa-facebook" /></a></li>
          <li><a href="#"><i className="fa fa-twitter" /></a></li>
          <li><a href="#"><i className="fa fa-linkedin" /></a></li>
          <li><a href="#"><i className="fa fa-youtube" /></a></li>
          <li><a href="#"><i className="fa fa-google-plus" /></a></li>
        </ul>
      </div>
    );
  }
}

export default FooterConnectUs;
