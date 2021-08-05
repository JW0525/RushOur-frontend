import React, { Component } from 'react';
import './MainList.scss';

class MainListCom extends Component {
  render() {
    return (
      <>
        <li className="product">
          <div className="thumb">
            <img
              alt="제품사진"
              // src="/images/cream01.png"
              className="productImg"
            />
          </div>
          <div className="productInfo">
            <h3>아워매직 크리스탈스 300g/600g</h3>
            <p>#스크럽#민트의마법#시원해져라</p>
            <p className="price">₩ 32,000</p>
          </div>
        </li>
      </>
    );
  }
}

export default MainListCom;
