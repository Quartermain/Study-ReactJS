import React from 'react';
import './App.css';
import Header from './Header/Header';
import BannerBottom from './BannerBottom/BannerBottom';
import MainContent from './MainContent/FeatureVideo/MainContent';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BannerBottom></BannerBottom>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
