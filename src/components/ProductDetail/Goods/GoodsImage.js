/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class GoodsImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }
  componentDidMount() {
    fetch('/data/productDetail/product.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data.sub_categories[0],
        });
      });
  }

  render() {
    return (
      <div className="goodsImage">
        <img src={this.state.product.thumbnail}></img>
      </div>
    );
  }
}
