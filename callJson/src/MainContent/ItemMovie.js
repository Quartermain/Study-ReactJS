import React, { Component } from 'react';

class ItemMovie extends Component {
    render() {

        return (
            <div>
                <img src= { this.props.data.poster_path }  alt={ this.props.title } className="img-responsive"/>

                <div className="clearfix"> </div>
            </div>
        );
    }
}

export default ItemMovie;