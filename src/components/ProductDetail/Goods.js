import React from 'react';
import Location from './Goods/Location';
import { GoodsImage } from './Goods/GoodsImage';
import { GoodsInfo } from './Goods/GoodsInfo';

export class Goods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  render() {
    const { product } = this.props;
    return (
      <div className="goods">
        <Location />
        <div className="goodsView">
          <GoodsImage product={product} />
          <GoodsInfo product={product} />
        </div>
      </div>
    );
  }
}
