import React, { Component } from 'react';
import SignUp from './SignUp';
import { FooterLinks } from './FooterLinks';
import FooterBottomLinks from './FooterBottomLinks';
import FooterConnectUs from './FooterConnectUs';
import FooterCopyRight from './FooterCopyRight';

export class Footers extends Component {
  render() {
    return (
      <div>
        <div className="contact-w3ls" id="contact">
          <div className="footer-w3lagile-inner">
            <SignUp/>
            <FooterLinks/>
            <FooterBottomLinks/>
            <FooterConnectUs/>
          </div>
        </div>
        <FooterCopyRight/>
      </div>
    );
  }
}

export default Footers;
