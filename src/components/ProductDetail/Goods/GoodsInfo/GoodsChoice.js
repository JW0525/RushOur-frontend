/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class GoodsChoice extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
  }

  showMenu = e => {
    e.preventDefault();
    this.setState({
      showMenu: true,
    });
  };

  render() {
    const { showMenu } = this.state;
    const { optionChangeS, optionChangeL, product } = this.props;
    return (
      <div className="goodsChoice">
        <h6>용량</h6>

        <div className="optionSelect">
          <button onClick={this.showMenu}>
            <p> = 옵션 : 가격 = </p>
          </button>

          {showMenu && (
            <div>
              <button className="optionDetailTop" onClick={optionChangeS}>
                <p> {product.options && product.options[0].size}g </p>
              </button>

              <button className="optionDetailBtm" onClick={optionChangeL}>
                <p>
                  {' '}
                  {product.options[1].size}
                  g:₩+
                  {(
                    product.options[1].price - product.options[0].price
                  ).toLocaleString()}
                </p>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
