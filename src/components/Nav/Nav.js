import React, { Component } from 'react';
import './Nav.scss';

export class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
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
