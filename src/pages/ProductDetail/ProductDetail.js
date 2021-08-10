import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Goods } from '../../components/ProductDetail/Goods';
import { Info } from '../../components/ProductDetail/Info';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    fetch(`http://10.58.3.65:8000/products/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          product: res.data,
        });
      });
  }

  render() {
    return (
      <>
        <Goods product={this.state.product} />
        <Info product={this.state.product} />
      </>
    );
  }
}

export default ProductDetail;
