/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import { InfoDetail } from './Info/InfoDetail';
import { InfoDelivery } from './Info/InfoDelivery';

export class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
    this.tapDetail = React.createRef();
    this.tapDelivery = React.createRef();
  }

  moveDetail = () =>
    window.scroll(0, this.tapDetail.current.offsetTop, {
      top: 100,
      left: 100,
      behavior: 'smooth',
    });

  moveDelivery = () =>
    window.scroll(0, this.tapDelivery.current.offsetTop, {
      top: 100,
      left: 100,
      behavior: 'smooth',
    });

  render() {
    const { tapDetail, tapDelivery, moveDetail, moveDelivery } = this;
    const { product } = this.props;
    return (
      <div className="info">
        <InfoDetail
          tapDetail={tapDetail}
          tapDelivery={tapDelivery}
          moveDetail={moveDetail}
          moveDelivery={moveDelivery}
          product={product}
        />
        <InfoDelivery
          tapDetail={tapDetail}
          tapDelivery={tapDelivery}
          moveDetail={moveDetail}
          moveDelivery={moveDelivery}
          product={product}
        />
      </div>
    );
  }
}
