import React, { Component } from 'react';
import MainCarousel from './MainCarousel';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <>
        <div className="mainContainer">
          <MainCarousel />
          <div className="mainContents01">
            <div className="contentsInner01">
              <div className="mainList">
                <h2>나만 알고 싶은 향기</h2>
                <ul className="productBox">
                  <li className="product">
                    <div className="thumb">
                      <img
                        alt="제품사진"
                        src="/images/cream01.png"
                        className="productImg"
                      />
                    </div>
                    <div className="productInfo">
                      <h3>아워매직 크리스탈스 300g/600g</h3>
                      <p>#스크럽#민트의마법#시원해져라</p>
                      <p className="price">₩ 32,000</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mainAside"></div>
            </div>
          </div>
          <div className="mainContents02">
            <div className="contents02L"></div>
            <div className="contents02R">
              <div className="contents02RTop"></div>
              <div className="contents02RBottom">
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="mainContents03">
            <div className="contentsInner02">
              <span>
                <p>NEW 탱글드 헤어 트리트먼트</p>
                <p>
                  전통 악기에서 영감을 받은 두피 트리트먼트로, 기분 좋은 낮잠에
                  빠져들듯 부드럽고 편안한 시간을 선사합니다.
                </p>
              </span>
              <p></p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
