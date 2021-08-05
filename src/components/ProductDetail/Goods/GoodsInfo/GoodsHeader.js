/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class GoodsHeader extends React.Component {
  render() {
    return (
      <div className="goodsHeader">
        <h5>오션 솔트 셀프-프리저빙 120g/250g</h5>
        <img
          className="iconShare"
          src="../../../images/ProductDetail/share.png"
        />
        <img src="../../../images/ProductDetail/heart.png" />
      </div>
    );
  }
}
