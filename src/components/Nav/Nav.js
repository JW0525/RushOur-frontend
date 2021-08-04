import React, { Component } from 'react';
import './Nav.scss';

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      productList: false,
    };
  }

  menuHandler = () => {
    const { productList } = this.state;
    this.setState({
      productList: !productList,
    });
  };

  render() {
    const { productList } = this.state;
    const { menuHandler } = this;
    console.log(productList);
    return (
      <div className="nav">
        <h1>LUSH</h1>
        <ul>
          <li onMouseEnter={menuHandler} onMouseOut={menuHandler}>
            제품
          </li>
          {productList && (
            <div className="navList">
              <ul>
                <li>큰 카테고리</li>
                <li>작은 카테고리</li>
                <li>작은 카테고리</li>
                <li>작은 카테고리</li>
                <li>작은 카테고리</li>
              </ul>
              <ul>
                <li>큰 카테고리</li>
                <li>작은 카테고리</li>
                <li>작은 카테고리</li>
                <li>작은 카테고리</li>
                <li>작은 카테고리</li>
              </ul>
            </div>
          )}
          <li>러쉬 소개</li>
          <li>매장 안내</li>
          <li>스파</li>
          <li>이벤트</li>
        </ul>
        <div className="navIcon">
          <i class="fas fa-search"></i>
          <i class="fas fa-shopping-bag"></i>
          <i class="fas fa-user-circle"></i>
        </div>
      </div>
    );
  }
}

export default Nav;
