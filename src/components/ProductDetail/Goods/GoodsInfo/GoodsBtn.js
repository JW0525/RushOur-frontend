/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class GoodsBtn extends React.Component {
  render() {
    return (
      <div className="goodsBtn">
        <button
          className="btnCart"
          onClick={this.props.submitCart}
          // onClick={() => {
          //   this.props.history.push('/cart');
          // }}
        >
          장바구니
        </button>
        <button className="btnOrder">주문하기</button>
      </div>
    );
  }
}

export default withRouter(GoodsBtn);
