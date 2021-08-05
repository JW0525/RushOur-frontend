import React, { Component } from 'react';
import MainListCom from './MainListCom';
import './MainList.scss';

class MainList extends Component {
  render() {
    return (
      <section className="mainContents01">
        <div className="mainList">
          <h2>나만 알고 싶은 향기</h2>
          <ul className="productBox">
            <MainListCom />
          </ul>
        </div>
        <div className="mainAside"></div>
      </section>
    );
  }
}

export default MainList;
