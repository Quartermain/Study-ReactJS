import React, { Component } from 'react';
import './App.css';
import Footer from './footer';

class App extends Component {

  //  Function binh thuong
 renderLayout() {
   return <div>
     <ul>
       <li>1</li>
       <li>2</li>
       <li>3</li>
       <li>4</li>
       <li>5</li>
     </ul>
   </div>
 }

 //  Function binh thuong
 renderFooter = () => {
  return (
    <div>
      test xem sao
    </div>
  )
 }

  render() {
    return (
      <div className="App">
        { this.renderLayout() }
        { this.renderFooter() }

        <Footer name="Footer links" use="Trung"/>
      </div>
    );
  }
}

export default App;

