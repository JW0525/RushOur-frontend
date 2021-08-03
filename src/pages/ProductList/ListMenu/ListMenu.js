import React, { Component } from 'react';
import './ListMenu.scss';

export class ListMenu extends Component {
  render() {
    return (
      <>
        <div className="listMenu">
          <h2>보디</h2>
          <div className="listMenuBtn">
            <span onClick={() => console.log('hi')}>추천순</span>
            <ul>
              <li>추천순</li>
              <li>판매인기순</li>
              <li>낮은가격순</li>
              <li>높은가격순</li>
              <li>리뷰많은순</li>
              <li>신제품순</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ListMenu;
