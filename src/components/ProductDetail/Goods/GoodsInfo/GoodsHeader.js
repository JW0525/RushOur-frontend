/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class GoodsHeader extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className="goodsHeader">
        <h5>{product.name}</h5>
        <img
          className="iconShare"
          src="../../../images/ProductDetail/share.png"
        />
        <img src="../../../images/ProductDetail/heart.png" />
      </div>
    );
  }
}
