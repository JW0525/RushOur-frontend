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
      countS: 0,
      countL: 0,
      optionValueOne: false,
      optionValueTwo: false,
    };
  }

  plusClickS = () => {
    let { countS } = this.state;
    if (countS < 20) {
      this.setState({ countS: countS + 1 });
    }
  };

  plusClickL = () => {
    let { countL } = this.state;
    if (countL < 20) {
      this.setState({ countL: countL + 1 });
    }
  };

  minusClickS = () => {
    let { countS } = this.state;
    if (countS > 0) {
      this.setState({ countS: countS - 1 });
    }
    <GoodsHeader />;
  };

  minusClickL = () => {
    let { countL } = this.state;
    if (countL > 0) {
      this.setState({ countL: countL - 1 });
    }
    <GoodsHeader />;
  };

  deleteBtnS = () => {
    this.setState({
      optionValueOne: false,
      countS: 0,
    });
  };

  deleteBtnL = () => {
    this.setState({
      optionValueTwo: false,
      countL: 0,
    });
  };

  optionChangeS = () => {
    this.setState({
      optionValueOne: true,
      countS: 1,
    });
  };

  optionChangeL = () => {
    this.setState({
      optionValueTwo: true,
      countL: 1,
    });
  };

  render() {
    const { countS, countL, optionValueOne, optionValueTwo } = this.state;
    const { product } = this.props;
    return (
      <div className="goodsInfo">
        <GoodsHeader product={product} />
        <GoodsItem product={product} />
        <GoodsChoice
          product={product}
          optionChangeS={this.optionChangeS}
          optionChangeL={this.optionChangeL}
        />
        {optionValueOne && (
          <>
            <GoodsPurchase
              count={countS}
              plusClick={this.plusClickS}
              minusClick={this.minusClickS}
              deleteBtn={this.deleteBtnS}
              option={product.options[0]}
            />
          </>
        )}
        {optionValueTwo && (
          <>
            <GoodsPurchase
              count={countL}
              plusClick={this.plusClickL}
              minusClick={this.minusClickL}
              deleteBtn={this.deleteBtnL}
              option={product.options[1]}
            />
          </>
        )}

        {optionValueOne || optionValueTwo ? (
          <GoodsAmount product={product} countS={countS} countL={countL} />
        ) : null}

        <GoodsBtn />
      </div>
    );
  }
}
