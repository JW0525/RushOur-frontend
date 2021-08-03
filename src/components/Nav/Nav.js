import React, { Component } from 'react';
import './Nav.scss';

export class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <h1>LUSH</h1>
        <ul>
          <li>제품</li>
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
