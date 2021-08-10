/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';

export class InfoDetail extends React.Component {
  render() {
    let { tapDetail, moveDetail, moveDelivery } = this.props;
    return (
      <div className="infoDetail">
        <div className="tap">
          <ul ref={tapDetail}>
            <li className="tapActivated" onClick={moveDetail}>
              상품상세정보
            </li>
            <li className="tapDeactivated" onClick={moveDelivery}>
              배송/교환 및 반품안내
            </li>
          </ul>
        </div>
        <img
          className="imageDetail"
          src="/images/ProductDetail/0803150742800428 (1).jpg"
        />
      </div>
    );
  }
}
