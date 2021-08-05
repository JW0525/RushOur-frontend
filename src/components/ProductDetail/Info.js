/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import { InfoDetail } from './Info/InfoDetail';
import { InfoDelivery } from './Info/InfoDelivery';

export class Info extends React.Component {
  constructor(props) {
    super(props);
    this.tapDetail = React.createRef();
    this.tapDelivery = React.createRef();
  }

  moveDetail = () =>
    window.scrollTo(0, this.tapDetail.current.offsetTop, {
      top: 0,
      behavior: 'smooth',
    });

  moveDelivery = () =>
    window.scrollTo(0, this.tapDelivery.current.offsetTop, {
      top: 0,
      behavior: 'smooth',
    });

  render() {
    return (
      <div className="info">
        <InfoDetail
          tapDetail={this.tapDetail}
          tapDelivery={this.tapDelivery}
          moveDetail={this.moveDetail}
          moveDelivery={this.moveDelivery}
        />
        <InfoDelivery
          tapDetail={this.tapDetail}
          tapDelivery={this.tapDelivery}
          moveDetail={this.moveDetail}
          moveDelivery={this.moveDelivery}
        />
      </div>
    );
  }
}
