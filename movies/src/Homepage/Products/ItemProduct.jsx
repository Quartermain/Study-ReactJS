import React, { Component } from 'react';

export class ItemProduct extends Component {
  // _showRate = (vote)=> {
  //   let 
  // }

  render() {
    // console.log("this.props.data._vote:::");
    // console.log(this.props.data._vote);
    
    const voteRate = ()=> {
      let vote = this.props.data._vote_average/2;
      const arr = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= vote) {
         arr.push(<li key={i}><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>);
        }

        else if (i > vote && vote > i-1){
          arr.push(<li key={i}><a href="#"><i className="fa fa-star-half-o" aria-hidden="true" /></a></li>);
        }

        else{
          arr.push(<li key={i}><a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a></li>);
        }
      }

      return arr;
    }

    return (
      <React.Fragment>
        <a href="single.html" className="hvr-sweep-to-bottom">
          <img src={this.props.data._url} title="Movies Pro" className="img-responsive" alt="true" />
          <div className="w3l-action-icon">
            <i className="fa fa-play-circle-o" aria-hidden="true" />
          </div>
        </a>
        <div className="mid-1 agileits_w3layouts_mid_1_home">
          <div className="w3l-movie-text">
            <h6><a href="single.html">{this.props.data._title}	</a></h6>							
          </div>
          <div className="mid-2 agile_mid_2_home">
            <p>{this.props.data._time}</p>
            
            <div className="block-stars">
              <ul className="w3l-ratings">
                {voteRate()}
              </ul>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="ribben one">
          <p>{this.props.data.ribben}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default ItemProduct;
