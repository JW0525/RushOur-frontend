/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class GoodsPurchase extends React.Component {
  render() {
    return (
      <div className="goodsPurchase">
        <div className="buttonAmount">
          <button onClick={this.props.minusClick}>
            <p>-</p>
          </button>
          <button>
            <p>{this.props.count}</p>
          </button>
          <button onClick={this.props.plusClick}>
            <p>+</p>
          </button>
        </div>
        <div className="priceAmount">
          <p>100g/{this.props.sales}</p>
          <button>
            <p>x</p>
          </button>
        </div>
      </div>
    );
  }
}
