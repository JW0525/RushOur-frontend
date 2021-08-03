import React, { Component } from 'react';
import './ProductList.scss';

class ProductList extends Component {
  render() {
    console.log('render ProductList');
    return (
      <div className="listHeader">
        {/* <div className="listHeaderImg">dfsafsad</div> */}
        <img src="/images/fakeHeader.png" alt="headerImg" />
        <div className="listMenu">
          <h2>body</h2>
        </div>
      </div>
    );
  }
}

export default ProductList;
