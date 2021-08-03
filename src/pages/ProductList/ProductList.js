import React, { Component } from 'react';
import ListMenu from './ListMenu/ListMenu';
import './ProductList.scss';

class ProductList extends Component {
  render() {
    return (
      <>
        <div className="listHeader">
          <div className="listHeaderImg">dfsafsad</div>
          {/* <img src="/images/fakeHeader.png" alt="headerImg" /> */}
        </div>
        <ListMenu />
      </>
    );
  }
}

export default ProductList;
