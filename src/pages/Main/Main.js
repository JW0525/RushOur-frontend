import React, { Component } from 'react';
import MainCarousel from './MainCarousel/MainCarousel';
import MainList from './MainList/MainList';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <main className="mainContainer">
        <MainCarousel />
        <MainList />
        <section className="mainContents02">
          <div className="contents02L"></div>
          <div className="contents02R">
            <div className="contents02RTop"></div>
            <div className="contents02RBottom">
              <p></p>
              <p></p>
            </div>
          </div>
        </section>
        <section className="mainContents03">
          <span>
            <p>NEW 탱글드 헤어 트리트먼트</p>
            <p>
              전통 악기에서 영감을 받은 두피 트리트먼트로, 기분 좋은 낮잠에
              빠져들듯 부드럽고 편안한 시간을 선사합니다.
            </p>
          </span>
          <p></p>
        </section>
      </main>
    );
  }
}

export default Main;
