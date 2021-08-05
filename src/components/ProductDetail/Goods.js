/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Location } from './Goods/Location';
import { GoodsImage } from './Goods/GoodsImage';
import { GoodsInfo } from './Goods/GoodsInfo';

export class Goods extends React.Component {
  render() {
    return (
      <div className="goods">
        <Location />
        <div className="goodsView">
          <GoodsImage />
          <GoodsInfo />
        </div>
      </div>
    );
  }
}
