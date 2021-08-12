import React, { Component } from 'react';
import MainCarousel from './MainCarousel/MainCarousel';
import MainList from './MainList/MainList';
import MainAside from './MainAside/MainAside';
import MainContent from './MainContent/MainContent';
import MainContent2 from './MainContent2/MainContent2';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <main className="mainContainer">
        <MainCarousel />
        <div className="sectionContainer">
          <div className="contentsBox01">
            <MainList />
            <MainAside />
          </div>
          <div className="contentsBox02">
            <MainContent />
          </div>
          <div className="contentsBox03">
            <MainContent2 />
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
