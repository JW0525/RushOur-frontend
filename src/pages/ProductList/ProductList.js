import React, { Component } from 'react';
import ListMenu from './ListMenu/ListMenu';
import ListHeader from './ListHeader/ListHeader';
import Product from './Product/Product';
import './ProductList.scss';

class ProductList extends Component {
  render() {
    return (
      <div className="productList">
        <ListHeader />
        <ListMenu />
        <div className="productContainer">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    );
  }
}

export default ProductList;
