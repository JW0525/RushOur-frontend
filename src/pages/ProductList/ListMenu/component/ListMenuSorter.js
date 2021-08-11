import React, { Component } from 'react';
import './ListMenuSorter.scss';

export class ListMenuSorter extends Component {
  render() {
    const { buttonHandler, buttonOn } = this.props;
    return (
      <div className="listMenuBtn">
        <span onClick={buttonHandler} className={buttonOn && 'inactive'}>
          추천순&nbsp;
          <i class="fas fa-caret-down"></i>
        </span>

        {buttonOn && (
          <ul>
            <li>추천순</li>
            <li>판매인기순</li>
            <li>낮은가격순</li>
            <li>높은가격순</li>
            <li>리뷰많은순</li>
            <li>신제품순</li>
          </ul>
        )}
      </div>
    );
  }
}

export default ListMenuSorter;
