import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';
import BannerInfor from './BannerInfor';

export class Headers extends Component {
  render() {
    return (
      <div id="demo-1" className="demo-1" data-zs-src='["./assest/images/2.jpg", "./assest/images/1.jpg", "./assest/images/3.jpg","./assest/images/4.jpg"]' data-zs-overlay="dots">
        <div className="demo-inner-content">
          <div className="header-w3-agileits" id="home">
            <div className="inner-header-agile">	
              <nav className="navbar navbar-default">
                <Logo/>
                <Menu/>
              </nav>
              <Search/>
            </div> 
          </div>
          <BannerInfor/>
        </div>
      </div>
    );
  }
}

export default Headers;
