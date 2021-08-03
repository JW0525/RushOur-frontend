import React, { Component } from 'react';

class MainCarousel extends Component {
  render() {
    return (
      <>
        <div className="mainVisual">
          <div className="mainVisualSilde">
            <div className="visual01">
              <div className="visualText">
                <h1>시원하게 슥슥</h1>
                <p>[BEST] 러쉬 썸머 스킨케어</p>
                <button className="visualButton">자세히 보기</button>
              </div>
              <div className="rolling">
                <ul>
                  <li className="dotList">
                    <button className="dot1"></button>
                  </li>
                  <li className="dotList">
                    <button className="dot"></button>
                  </li>
                  <li className="dotList">
                    <button className="dot"></button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default MainCarousel;
