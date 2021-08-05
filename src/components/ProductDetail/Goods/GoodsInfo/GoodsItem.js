/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class GoodsItem extends React.Component {
  render() {
    return (
      <div className="goodsItem">
        <div className="goodToKnow">Good to know</div>
        <div className="goodsPrice">
          <h6>판매가</h6>
          <p>{this.props.sales}</p>
        </div>
      </div>
    );
  }
}
