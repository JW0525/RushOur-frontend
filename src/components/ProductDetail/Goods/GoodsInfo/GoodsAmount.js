/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class GoodsAmount extends React.Component {
  render() {
    const { product, countS, countL } = this.props;
    return (
      <div class="goodsAmount">
        <div>
          <p>총제품금액</p>
          <h6>
            ₩{' '}
            {product.options && product.options[1]
              ? (
                  (product.options && product.options[0].price) * countS +
                  (product.options && product.options[1].price) * countL
                ).toLocaleString()
              : (
                  (product.options && product.options[0].price) * countS
                ).toLocaleString()}
          </h6>
        </div>
      </div>
    );
  }
}
