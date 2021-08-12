/*eslint-disable*/

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Goods } from '../../components/ProductDetail/Goods';
import { Info } from '../../components/ProductDetail/Info';
import { API } from '../../config';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    fetch(`${API.PRODUCTLIST}/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          product: res.data,
        });
        console.log('data:', res);
      });
  }

  render() {
    return (
      <>
        <Goods product={this.state.product} />
        <Info />
      </>
    );
  }
}

export default ProductDetail;
