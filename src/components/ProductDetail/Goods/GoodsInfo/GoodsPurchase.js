/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class GoodsPurchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 0,
    };
  }
  render() {
    let { minusClick, plusClick, count, option, deleteBtn } = this.props;
    return (
      <div className="goodsPurchase">
        <div className="buttonAmount">
          <button onClick={minusClick}>
            <p>-</p>
          </button>
          <button>
            <p>{count}</p>
          </button>
          <button onClick={plusClick}>
            <p>+</p>
          </button>
        </div>
        <div className="priceAmount">
          <p>
            {option && option.size}g / ₩&nbsp;
            {((option && option.price) || '')
              .split('.', 1)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
          <button onClick={deleteBtn}>
            <p>x</p>
          </button>
        </div>
      </div>
    );
  }
}
