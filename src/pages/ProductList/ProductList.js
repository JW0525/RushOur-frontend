import React, { Component } from 'react';
import ListMenu from './ListMenu/ListMenu';
import ListHeader from './ListHeader/ListHeader';
import './ProductList.scss';

class ProductList extends Component {
  render() {
    return (
      <>
        <ListHeader />
        <ListMenu />
      </>
    );
  }
}

export default ProductList;
