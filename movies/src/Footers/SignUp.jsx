import React, { Component } from 'react';

export class SignUp extends Component {
  render() {
    return (
      <div>
        <h2>Sign up for our <span>Newsletter</span></h2>
        <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus 
          tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
        <div className="footer-contact">
          <form action="#" method="post">
            <input type="email" name="Email" placeholder="Enter your email...." required=" " />
            <input type="submit" defaultValue="Subscribe" />
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
