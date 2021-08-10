/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class GoodsItem extends React.Component {
  render() {
    let { product } = this.props;
    return (
      <div className="goodsItem">
        <div className="goodToKnow">Good to know</div>
        <div className="goodsPrice">
          <h6>판매가</h6>
          <p>
            ₩&nbsp;
            {((product.options && product.options[0].price) || '')
              .split('.', 1)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
        </div>
      </div>
    );
  }
}
