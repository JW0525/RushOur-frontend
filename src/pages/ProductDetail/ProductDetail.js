/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Goods } from '../../components/ProductDetail/Goods';
import { Info } from '../../components/ProductDetail/Info';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  render() {
    return (
      <>
        <Goods />
        <Info />
      </>
    );
  }
}

export default ProductDetail;
