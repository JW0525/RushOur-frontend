/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class GoodsBtn extends React.Component {
  render() {
    return (
      <div className="goodsBtn">
        <button className="btnCart">장바구니</button>
        <button className="btnOrder">주문하기</button>
      </div>
    );
  }
}
