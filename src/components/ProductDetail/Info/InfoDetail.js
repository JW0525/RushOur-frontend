/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';

export class InfoDetail extends React.Component {
  render() {
    return (
      <div className="infoDetail">
        <div className="tap">
          <ul ref={this.props.tapDetail}>
            <li className="tapActivated" onClick={this.props.moveDetail}>
              상품상세정보
            </li>
            <li className="tapDeactivated" onClick={this.props.moveDelivery}>
              배송/교환 및 반품안내
            </li>
          </ul>
        </div>
        <img
          className="imageDetail"
          src="../../../images/ProductDetail/0803150742800428 (1).jpg"
        />
      </div>
    );
  }
}
