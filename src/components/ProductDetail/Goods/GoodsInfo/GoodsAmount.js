/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class GoodsAmount extends React.Component {
  render() {
    return (
      <div class="goodsAmount">
        <div>
          <p>총제품금액</p>
          <h6>₩ {this.props.count * this.props.sales}</h6>
        </div>
      </div>
    );
  }
}
