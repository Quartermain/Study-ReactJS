import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    
    // this.textInput = React.createRef();
    // this.textName = React.createRef();
    // this.textPhone = React.createRef();

    this.state = {
      value: '',
      name: '',
      phone: ''
    }
  }


  handleSubmit = e => {
    e.preventDefault();
    this.setState (
      {
        value: this.textInput.value,
        name: this.textName.value,
        phone: this.textPhone.value
      }
    )
  };

  // handleChange = () => {
  //   this.setState({ value: this.textInput.current.value})
  // };

  _rendEdit = ()=> {
    return (
      <div className="button-group">
          <button onClick={this._changeStateButton} >Edit</button>
      </div>
    )
  }

  _rendSave = ()=> {
    return (
      <div className="button-group">
        <input type="text" name="brand" />
        <button onClick={this._changeStateButton} >Save</button>
      </div>
    )
  }

  _checkStatus = ()=> {
    if(this.state.status === 0) {
      return ( 
        this._rendEdit() 
      )
    } else {
      return( 
        this._rendSave()
      )
    }
  }

  _changeStateButton = ()=> {
    if ( this.state.status === 0 ) {
      { this.setState ({
            status: 1
        })
      }
    } else {
      { this.setState ({
          status: 0
        })
      }
    }
  }

  handerClick = ()=> {
    return '';
  }

  render() {
    return (
      <div>
        <h1>React Ref - createRef</h1>
        
        <h3>Value: {this.state.value}</h3>
        <h3>Value: {this.state.name}</h3>
        <h3>Value: {this.state.phone}</h3>

        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={e => this.textInput = e} /><br/>
          <input type="text" ref={e => this.textName = e} /><br/>
          <input type="text" ref={e => this.textPhone = e} /><br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
