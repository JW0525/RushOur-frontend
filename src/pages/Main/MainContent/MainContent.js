import React, { Component } from 'react';
import './MainContent.scss';

class MainContent extends Component {
  render() {
    return (
      <section className="mainContents03">
        <div className="mainLeft">
          <div className="textBox">
            <h3>PRODUCT</h3>
            <p>
              RUSHOUR와 함께하는 <br />
              친환경 SOAP 이야기
            </p>
          </div>
        </div>
        <div className="mainRight">
          <div className="mainLeftTop">
            <div className="textBox">
              <h3>EVENT</h3>
              <p>SOAP 이야기</p>
            </div>
          </div>
          <div className="mainLeftBottom">
            <div className="bottomLeft">
              <div className="textBox">
                <h3>BATHBOMS</h3>
                <p>
                  친환경 <br />
                  SOAP 이야기
                </p>
              </div>
            </div>
            <div className="bottomRight">
              <div className="textBox">
                <h3>PRODUCT</h3>
                <p>
                  러시아워 <br />
                  SOAP 이야기
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainContent;
