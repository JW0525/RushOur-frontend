/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { GoodsHeader } from './GoodsInfo/GoodsHeader.js';
import { GoodsItem } from './GoodsInfo/GoodsItem.js';
import { GoodsChoice } from './GoodsInfo/GoodsChoice.js';
import { GoodsPurchase } from './GoodsInfo/GoodsPurchase.js';
import { GoodsAmount } from './GoodsInfo/GoodsAmount.js';
import GoodsBtn from './GoodsInfo/GoodsBtn.js';

export class GoodsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // product: {},
      countS: 0,
      countL: 0,
      optionValueOne: false,
      optionValueTwo: false,
    };
  }

  plusClickS = () => {
    const { countS } = this.state;
    if (countS < 20) {
      this.setState({ countS: countS + 1 });
    }
  };

  plusClickL = () => {
    const { countL } = this.state;
    if (countL < 20) {
      this.setState({ countL: countL + 1 });
    }
  };

  minusClickS = () => {
    const { countS } = this.state;
    if (countS > 0) {
      this.setState({ countS: countS - 1 });
    }
    <GoodsHeader />;
  };

  minusClickL = () => {
    const { countL } = this.state;
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

  submitCart = () => {
    let 따라란 = [];
    const { countL, countS } = this.state;
    const { product } = this.props;
    if (countS !== 0)
      따라란.push({
        product_id: product.product_id,
        option_id: product.options[0].option_id,
        quantity: countS,
      });
    if (countL !== 0)
      따라란.push({
        product_id: product.product_id,
        option_id: product.options[1].option_id,
        quantity: countL,
      });

    console.log(따라란);

    fetch(`http://10.58.2.67:8000/carts}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'post',
      body: JSON.stringify({
        request_list: 따라란,
      }),
    }).then(res => res.text());
    // .then(text => console.log(text));
  };

  render() {
    const { countS, countL, optionValueOne, optionValueTwo } = this.state;
    const { product } = this.props;
    console.log(this.props.product);

    return (
      <div className="goodsInfo">
        <GoodsHeader product={product} />
        <GoodsItem product={product} />
        {product.options && product.options[1] ? (
          <GoodsChoice
            product={product}
            optionChangeS={this.optionChangeS}
            optionChangeL={this.optionChangeL}
          />
        ) : (
          <>
            <GoodsPurchase
              count={countS}
              plusClick={this.plusClickS}
              minusClick={this.minusClickS}
              deleteBtn={this.deleteBtnS}
              option={product.options && product.options[0]}
            />
            <GoodsAmount product={product} countS={countS} />
          </>
        )}

        {optionValueOne && (
          <GoodsPurchase
            count={countS}
            plusClick={this.plusClickS}
            minusClick={this.minusClickS}
            deleteBtn={this.deleteBtnS}
            option={product.options[0]}
          />
        )}
        {optionValueTwo && (
          <GoodsPurchase
            count={countL}
            plusClick={this.plusClickL}
            minusClick={this.minusClickL}
            deleteBtn={this.deleteBtnL}
            option={product.options[1]}
          />
        )}

        {optionValueOne || optionValueTwo ? (
          <GoodsAmount product={product} countS={countS} countL={countL} />
        ) : null}

        <GoodsBtn submitCart={this.submitCart} />
      </div>
    );
  }
}
