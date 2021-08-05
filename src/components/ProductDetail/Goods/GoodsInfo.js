/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { GoodsHeader } from './GoodsInfo/GoodsHeader.js';
import { GoodsItem } from './GoodsInfo/GoodsItem.js';
import { GoodsChoice } from './GoodsInfo/GoodsChoice.js';
import { GoodsPurchase } from './GoodsInfo/GoodsPurchase.js';
import { GoodsAmount } from './GoodsInfo/GoodsAmount.js';
import { GoodsBtn } from './GoodsInfo/GoodsBtn.js';

export class GoodsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      sales: 27000,
      value: '1',
    };
  }

  plusClick = () => {
    if (this.state.count < 20) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  minusClick = () => {
    if (this.state.count > 1) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="goodsInfo">
        <GoodsHeader />
        <GoodsItem sales={this.state.sales} />
        <GoodsChoice value={this.state.value} />
        {this.state.value === '1' ? (
          <GoodsPurchase
            count={this.state.count}
            plusClick={this.plusClick}
            minusClick={this.minusClick}
            sales={this.state.sales}
          />
        ) : null}

        <GoodsAmount count={this.state.count} sales={this.state.sales} />
        <GoodsBtn />
      </div>
    );
  }
}
