import React, { Component } from 'react';

export class BlockInfo extends Component {
  
  render() {
    return (
      <div className="w3_agilits_banner_bootm">
        <div className="w3_agilits_inner_bottom">
          <div className="col-md-6 wthree_agile_login">
            <ul>
              <li><i className="fa fa-phone" aria-hidden="true" /> (+000) 009 455 4088</li>
              <li><a href="#" className="login" data-toggle="modal" data-target="#myModal4">Login</a></li>
              <li><a href="#" className="login reg" data-toggle="modal" data-target="#myModal5">Register</a></li>
            </ul>
          </div>
          <div className="col-md-6 wthree_share_agile">
            <div className="single-agile-shar-buttons">
              <ul>
                <li>
                  <div className="fb-like" data-href="https://www.facebook.com/w3layouts" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="false" />
                  
                </li>
                <li>
                  <div className="fb-share-button" data-href="https://www.facebook.com/w3layouts" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a className="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fw3layouts&src=sdkpreparse">Share</a></div>
                </li>
                <li className="news-twitter">
                  <a href="https://twitter.com/w3layouts" className="twitter-follow-button" data-show-count="false">Follow @w3layouts</a>
                </li>
                <li>
                  <a href="https://twitter.com/intent/tweet?screen_name=w3layouts" className="twitter-mention-button" data-show-count="false">Tweet to @w3layouts</a>
                </li>
                <li>
                  <div className="g-plusone" data-size="medium" />
                  
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="modal fade" id="myModal4" tabIndex={-1} role="dialog">
            <div className="modal-dialog">
              {/* Modal content*/}
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">×</button>
                  <h4>Login</h4>
                  <div className="login-form">
                    <form action="#" method="post">
                      <input type="email" name="email" placeholder="E-mail" required />
                      <input type="password" name="password" placeholder="Password" required />
                      <div className="tp">
                        <input type="submit" defaultValue="LOGIN NOW" />
                      </div>
                      <div className="forgot-grid">
                        <div className="log-check">
                          <label className="checkbox"><input type="checkbox" name="checkbox" />Remember me</label>
                        </div>
                        <div className="forgot">
                          <a href="#" data-toggle="modal" data-target="#myModal2">Forgot Password?</a>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="modal fade" id="myModal5" tabIndex={-1} role="dialog">
            <div className="modal-dialog">
          
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">×</button>
                  <h4>Register</h4>
                  <div className="login-form">
                    <form action="#" method="post">
                      <input type="text" name="name" placeholder="Name" required />
                      <input type="email" name="email" placeholder="E-mail" required />
                      <input type="password" name="password" placeholder="Password" required />
                      <input type="password" name="conform password" placeholder="Confirm Password" required />
                      <div className="signin-rit">
                        <span className="agree-checkbox">
                          <label className="checkbox"><input type="checkbox" name="checkbox" />I agree to your <a className="w3layouts-t" href="#" target="_blank">Terms of Use</a> and <a className="w3layouts-t" href="#" target="_blank">Privacy Policy</a></label>
                        </span>
                      </div>
                      <div className="tp">
                        <input type="submit" defaultValue="REGISTER NOW" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlockInfo;
