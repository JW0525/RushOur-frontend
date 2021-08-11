import React, { Component } from 'react';
import './ListMenuSorter.scss';

export class ListMenuSorter extends Component {
  render() {
    const { priceSorter, buttonHandler, buttonOn } = this.props;
    return (
      <div className="listMenuBtn">
        <span onClick={buttonHandler} className={buttonOn && 'inactive'}>
          가격순&nbsp;
          <i class="fas fa-caret-down"></i>
        </span>

        {buttonOn && (
          <ul>
            <li onClick={() => priceSorter('low_price')}>낮은가격순</li>
            <li onClick={() => priceSorter('high_price')}>높은가격순</li>
          </ul>
        )}
      </div>
    );
  }
}

export default ListMenuSorter;
