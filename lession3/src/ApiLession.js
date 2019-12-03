import React, { Component } from 'react';
import { getMoviesList } from './Services';


class ApiLession extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData : []
        }
    }

    componentDidMount() {
        
        const params = {
            param1: "movie",
            param2: "popular",
        }

        console.log("Check params::::");
        console.log(params);

        const getMovie = getMoviesList(params);
        console.log("Check getMovie::::");
        console.log(getMovie);

        getMovie.then(res => {
            console.log(res);
            const itemProduct = res.data.results;
            console.log(itemProduct);
            this.setState({ listData:itemProduct });
            // console.log("ListData::::");
        })
        .catch(error => console.log(error));
    }

    shouldComponentUpdate(nextProps, nextState){
        // console.log("Next state:::");
        // console.log(nextState);
        // console.log("This state:::");
        // console.log(this.state);

        if (nextState !== this.state) {
            return true
        } else {
            return false
        }
    }

    _itemProduct = ()=> {
        let itemDetail = this.state.listData;
        console.log("Call Sate list data:::::");
        console.log(itemDetail);

        if (itemDetail !== 0 ) {
            console.log("Call Sate list data Item Detail:::::");
            console.log(itemDetail);

            let item = itemDetail.map(function(val, index){
                console.log(val);
                return (
                    <div data={val} key={index}>
                        {/* {val.id}<br/> */}
                        {val.release_date}
                    </div>
                )  
            })
    
            return item
        }
    }
    

    render() {
        console.log("Render::::");
        console.log(this.state);
        return (
            
            <div>
                {this._itemProduct()}
            </div>
        );
    }
}

export default ApiLession;