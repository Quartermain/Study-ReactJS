import React, { Component } from 'react';
import Menu from './Menu';
import Search from './Search';
import SliderBanner from './SliderBanner';
import BannerInfo from './BannerInfo';

export class Header extends Component {
  render() {
    return (
      <div id="demo-1" data-zs-src='["/asset/images/2.jpg", "/asset/images/1.jpg", "/asset/images/3.jpg","/asset/images/4.jpg"]' data-zs-overlay="dots">
        <div className="demo-inner-content">
          <div className="header-w3-agileits" id="home">
            <div className="inner-header-agile">
              <Menu></Menu>
              <Search></Search>
              <SliderBanner></SliderBanner>
            </div>
          </div>
          <BannerInfo></BannerInfo>
        </div>
      </div>
    );
  }
}

export default Header;
