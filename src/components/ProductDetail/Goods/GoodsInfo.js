/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { GoodsHeader } from './GoodsInfo/GoodsHeader.js';
import { GoodsItem } from './GoodsInfo/GoodsItem.js';
import { GoodsChoice } from './GoodsInfo/GoodsChoice.js';
import { GoodsPurchase } from './GoodsInfo/GoodsPurchase.js';
import { GoodsAmount } from './GoodsInfo/GoodsAmount.js';
import { API } from '../../../config.js';
import GoodsBtn from './GoodsInfo/GoodsBtn.js';

class GoodsInfo extends React.Component {
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
    if (this.state.countS < 20) {
      this.setState({ countS: this.state.countS + 1 });
    }
  };

  plusClickL = () => {
    if (this.state.countL < 20) {
      this.setState({ countL: this.state.countL + 1 });
    }
  };

  minusClickS = () => {
    if (this.state.countS > 0) {
      this.setState({ countS: this.state.countS - 1 });
    }
    <GoodsHeader />;
  };

  minusClickL = () => {
    if (this.state.countL > 0) {
      this.setState({ countL: this.state.countL - 1 });
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
    let productList = [];
    const { countL, countS } = this.state;
    if (countS !== 0)
      productList.push({
        product_id: this.props.product.product_id,
        option_id:
          this.props.product && this.props.product.options[0].option_id,
        quantity: countS,
      });
    if (countL !== 0)
      productList.push({
        product_id: this.props.product.product_id,
        option_id: this.props.product.options[1].option_id,
        quantity: countL,
      });

    fetch(API.CART, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      method: 'POST',
      body: JSON.stringify({
        request_list: productList,
      }),
    });
    this.props.history.push('/cart');
  };

  render() {
    const { countS, countL, optionValueOne, optionValueTwo } = this.state;
    const { product } = this.props;
    console.log('this.props:', this.props);

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

export default withRouter(GoodsInfo);
