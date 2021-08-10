/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class GoodsImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="goodsImage">
        <img src={this.props.product.thumbnail}></img>
      </div>
    );
  }
}
